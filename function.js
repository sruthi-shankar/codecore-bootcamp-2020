let expresion=function project(name1,name2,name3)
{
    console.log(name1);
    console.log(name2);
    console.log(name3);
}
expresion('jon snow','Cersei Lannister','Danerys Targeryan')

function drawLine();
{
const duplicator=function(x)
{
    return x*2;
}

//arrow function version of above function
const duplicator= (x)=> x*2;
//Higher Order functions
//Two ways of creating functions
//if a function accepts another function as an argument ,then it is called higher order functuon

function square(x)
{
    return x*x;
}

//demo loud function
const hello=(str)=>str;

const loud=fn=>console.log(`calling $(fn.name)`)

function factorial(num)
{
    for(let i=num;i>0;i--);
    //i=4;4>0;3 
    {
        const fact;
        fact=num*(num-1);
        
    }
    return fact

}
