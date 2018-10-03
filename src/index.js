module.exports = function getZerosCount(number, base) {
  let  div = 2,masp=[],mask=[],i=0,k=0;
  while (base > 1)
  {
    if(base % div == 0)
    {
      k=0;
      masp[i]=div;
      while (base % div == 0)
      {
        k++;
        mask[i]=k;
        base = base / div;
      }
      i++;
     }
     if (div == 2) div++;
     else div += 2;
  }
  let L=masp.length,sa=[],tmp;
  for(i =0; i<L;i++)
    sa[i]=0;
  for (i = 2;i <=number;i++)
  {
   tmp=i;
   for (j=0;j<L;j++) 
   {
    while (tmp%masp[j]==0) 
    {
      tmp/=masp[j]; 
      sa[j]++;
    }
   }
  } 
  tmp=sa[0]/mask[0]
  for (i = 1; i<L;i++) 
    tmp = Math.min(tmp, sa[i]/mask[i]);
  tmp=Math.trunc(tmp);
  return(tmp);
}