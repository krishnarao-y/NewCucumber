#!/bin/ksh
#################### Main script starts here ####################

if [ $# -lt 2 ] ; then
 echo "Error: Usage: `basename $0` <BaselineType> <PatchType>"
 echo "Example: `basename $0` BEFORE PSU"
 exit 1
fi

export BaselineType=`echo $1 | tr '[A-Z]' '[a-z]'`
export PatchType=`echo $2 | tr '[a-z]' '[A-Z]'`
export HOSTNAME=`/bin/hostname`
export DCLocation=`echo $HOSTNAME|cut -c1-9`
if [ `echo $HOSTNAME | egrep -i 'zdb|zdd|zbu' | wc -l` -gt 0 ]; then;
   export InventoryLoc=/var/opt/oracle/oraInst.loc
   export CRSSTAT=/orashare/crsstat
else
   export InventoryLoc=/etc/oraInst.loc
   export CRSSTAT=~/crsstat
fi
typeset LOGFILEPATH
typeset DT
export LOGFILEPATH=/orashare/restore/Patch-baselines/
export DT=`date +%d%b%Y`
mkdir -p $LOGFILEPATH; chmod 777 $LOGFILEPATH
export ORA_INV=`awk -F= '/inventory/ {print $2}' ${InventoryLoc}`
export CRS_HOME=`awk -F\" '/CRS/ {print $4}' $ORA_INV/ContentsXML/inventory.xml`
export RemoteNodes=`cat $ORA_INV/ContentsXML/inventory.xml | grep "NODE NAME" | awk -F\" '{print $2}' | grep -v $HOSTNAME | sort | uniq`
export ASM=`cat /etc/oratab | grep -v ^# | grep $CRS_HOME | awk -F: '{print $1}'`

if [ "$RemoteNodes" == "" ]; then;
  export ClusterName=`hostname`
else
  export ClusterName=`$CRS_HOME/bin/olsnodes -c`
fi

typeset -f NodeCheck
NodeCheck()
{
 hostname;
 echo =============;
 echo -e -n "Oratab Entry details\t: "
 cat /etc/oratab | grep -i ^[a-z] | awk -F: '{print $1}' | grep -v [a-z]$ | sort |wc -l
 cat /etc/oratab | grep -i ^[a-z] | awk -F: '{print $1}' | grep -v [a-z]$ | sort
 echo
 echo -e -n "DB/Instance Processes\t: "
 ps -ef | grep ora_[p]mon | cut -f3 -d_ | sort | wc -l
 ps -ef | grep ora_[p]mon | cut -f3 -d_ | sort
 echo
 echo -e -n "GoldenGate Processes\t: "
 ps -ef | egrep '\.prm' | grep -v grep | awk -F'PARAMFILE | REPORTFILE' '{print $1,$2}' | awk '{print $1,$(NF)}' | sort | wc -l
 ps -ef | egrep '\.prm' | grep -v grep | awk -F'PARAMFILE | REPORTFILE' '{print $1,$2}' | awk '{print $1,$(NF)}' | sort
 echo
 echo -e -n "Data Guard Processes\t: "
 ps -fu oracle | grep ora_mr[p] | awk '{print $1, $(NF)}' | sort | wc -l
 ps -fu oracle | grep ora_mr[p] | awk '{print $1, $(NF)}' | sort
 echo
 echo -e -n "Listener(s) information\t: "
 ps -ef | grep tnslsn[r] | awk '{print $1,$9}' | sort | wc -l
 ps -ef | grep tnslsn[r] | awk '{print $1,$9}' | sort
 echo
 echo -e "Filesystem information\t: "
 df -h | grep -v ^Filesystem | awk '{print $1}'
 echo
# crontab -l > ${LOGFILEPATH}/crontab-`hostname`-${DT}.bkp
}

cd ~
. oraenv <<EOF > /dev/null
$ASM
EOF

if [ `$CRS_HOME/bin/crsctl check crs | grep -v online | wc -l` -gt 0 ]; then;
   echo "Clusterware is not running properly on `hostname`. Please run the script from another node in the cluster."
   exit 1
fi

if [ "$RemoteNodes" == "" ]; then;
  export ClusterName=`hostname`
else
  export ClusterName=`$CRS_HOME/bin/olsnodes -c`
fi

(
$CRS_HOME/bin/crsctl stat res -t
printf "\n\n"
$CRSSTAT
printf "\n\n"
NodeCheck
if [ "$RemoteNodes" != "" ]; then;
  for Node in `echo $RemoteNodes`
  do
  ssh -q $Node "$(typeset -f) ;NodeCheck;"
  done
fi
) 2>&1 > $LOGFILEPATH/Baselines-of-${ClusterName}-${BaselineType}-${PatchType}.log
echo -e "OFFLINE/INTERMEDIATE resources ${BaselineType} ${PatchType} patching:"
$CRS_HOME/bin/crsctl stat res -t | egrep '^ora|OFFLINE|INTERMEDIATE' | egrep -B1 'OFFLINE|INTERMEDIATE' | grep -v ^-
echo -e "\n\nUseful information from baselines:"
cat $LOGFILEPATH/Baselines-of-${ClusterName}-${BaselineType}-${PatchType}.log | egrep "^${DCLocation}|^=|Processes|.prm|ora_mrp"
