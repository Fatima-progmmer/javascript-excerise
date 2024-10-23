//Excerise 01

let square={
    side:5,
    get area(){
        return this.side * this.side;
        //return this.side ** 2;  for power
    }
}
square.side =12
console.log(square.area)



//Excerise 2
console.log(stringConcat('_','this','is','invalid'))
function stringConcat(seperator,...strings){
    let returnval=" "
    strings.forEach((string,i) => {
        if(i==strings.length -1)
        returnval +=string ;
    else
        returnval +=string +seperator;
    })
    return returnval;
}



//Excerise 3
let arr=[1,2,3,4,5,6,7,8,9,0]
let fisrt=arr[0];
let seconds=arr[0];
let thirs =arr[0];
let others= arr.slice(3);
//second method destructure
let [fist,second,third,...other]=[1,2,3,4,5,6,7]



//Excerise 4
function match(step){
    if(house<=0)
    return 0;
else
     return house*6-house+1;
}
console.log(match(1));
console.log(match(9));
