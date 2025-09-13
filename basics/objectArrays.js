let person={
    name:"mounika",
    age:18
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person; //destructing assignment
console.log(name)
console.log(age)
 
let fruits=["apple","banana","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num)//mapping values
console.log(squares)

let evens=numbers.filter((num)=>num%2==0)//filter values
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0)//reduce values
console.log(sum)

let person1={
    name:"mounika",
    marks:10
   
}
let person2={
    name:"raji",
    marks:80

    
}
let person3={
    name:"haari",
    marks:70
}
let array={person1,person2,person3}
console.array(array)

let persons=[{
    name:"mounika",
    marks:100
},
{
    name:"raji",
    marks:80
},
{
    name:"haari",
    marks:70
}]
let maxmarks=0;
let topper="";
for(let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }
}
 console.log()

