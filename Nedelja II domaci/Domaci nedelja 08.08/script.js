/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/

let N = 9
br = Math.ceil(N/2)
let t=1
let t1=N
for (let i=1;i<=N;i++)
{
if(i>br){
t1-=2
console.log(' '.repeat(i-br)+'*'.repeat(t1)+' '.repeat(i-br))
}
else{
console.log(' '.repeat(br-i)+'*'.repeat(t)+' '.repeat(br-i))
t+=2

}
}


