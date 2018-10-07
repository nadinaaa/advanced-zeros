module.exports = function getZerosCount(number, base) {
  let ze=number;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let k = 0;
      while (base % i === 0) {
         base /= i;     
         k++; 
      }
      let z = Math.floor(number / i),a=0;
      while (z > 0) {
        a += z;
        z = Math.floor(z / i);
      }
      ze = Math.min(ze, Math.floor(a / k))
    }
  }
  return ze;
}
