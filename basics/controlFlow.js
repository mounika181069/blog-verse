let marks=85;
if(marks>=90){
    console.log("A+ grade")
}else if(marks>=80){
     console.log("A grade")
}else if(marks>=70){
     console.log("B grade")

}else{
     console.log("fail")
}

let day=1
switch(day){
    case 1:
        console.log("sunday")
        break;
    case 2:
       console.log("monday") 
       break;
    case 3:
        console.log("tuesday")
        break;
     case 4:
        console.log("wednesday")
    case 5:
        console.log("thursday")
        break;
    default:
        console.log(invalid)
        break;
}

let colors= ["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])

}
//in simple form for array
for(let color of colors){
    console.log(color)

}
//object
let person={
    name:"mounika",
    age:18,
    college:"JNTU-GV"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=5;i>0;i--)
{

    if(i==3){
        continue;
    }else if(i==2){
        break;
    }
    else{
        console.log(i)
    }
}