//arithematic operators

let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)
console.log(x%y)

//asignment operators
let z=5;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=3;
console.log(z)

//comparision operators

let a=10,b="10"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)

//logical operators

let age=18;
console.log(age>=20 && age<=40)
console.log(age<20 || age<40)
console.log(!(age>=19))

//string operators

let firstName="chirapareddy"
let lastname="mounika"
let fullname=firstName+lastname;
console.log(fullname)
let correctname=`hello ${firstName} ${lastname},welcome to devastra`
console.log(correctname)


//ternary operators

let myage=19;
if(myage>=18){
    console.log("eligible to vote")
    //result eligible to vote
}else{
    console.log("you cannot vote")
}
let result=myage>=18 ? "eligible to vote":"you cannot vote"
console.log(result)

//increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
console.log(count)
console.log(count--)
console.log(count)
console.log(--count)
console.log(count)

//typeof operators
console.log(typeof count)
console.log(typeof "mounika")
console.log(typeof 18)