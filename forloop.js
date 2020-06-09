//Three ways of creating for loop in java script

//to  print numbers from 1 to 10
const arr = [1,2,3,4,5]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

/*largest of two numbers

let x=20 ,y=10;
if(x>y)
{
    console.log("x is greater than y");
}
else{
    console.log("Y is greter than x")
}*/

//x=10,y=5,z=18
//lets take x=10 as standard and comapare
//is 10>5--? true  if(x>y)
//xi greater than y log x
//x>z if 
//is 10>18--> false
//hence z>

let x=10,y=20,z=30;

if(x>y && x>z)
{
    console.log("xis greter among three");
}
if(y>x && y>z)
{
    console.log("Yis greater among three");

}
if(z>x && z>y)
{
    console.log("z is greter among three");
}

//print all natural numbers from 1 to n
/*let n=100;
for (i=1;i<=n;i++)
{
    console.log(i)
}
*/
//using while loop

let n=10
while(n>=1)
{
    console.log(n)
    n--;
}