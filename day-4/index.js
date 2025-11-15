// function sayHello(){
//     console.log("hello javascript");
// }

// sayHello();



//2

// function add(a,b){
//     return a+b;

// }


// let sum=add(10,30);
// console.log(sum);



//3

// function abcd(name="guest"){

//     console.log("hii"+name);
// }

// abcd();


//4

// function add(...val){
// //  console.log(val);
// let sum=0;
// for(let i=0; i<val.length; i++){
// sum=sum+val[i];
// }
// console.log(sum);
// }


// add(1,2,3,4,5,6);



// function add(...val){
// //  console.log(val);
// let sum=0;
// val.forEach(function(num){
// sum=sum+num;
// })
// console.log(sum);
// }

// add(1,2,3,4,5,6);
// // console.log(value);


// function add(...val){
// //  console.log(val);
// let value=val.reduce(function(acc,num){

// return acc+num;

// },0)
// console.log(value);
// };

// add(1,2,3,4,5,6);

// console.log(value1);

//5

// (function(){

//     console.log("hello");
// })();


//6

// function abc(){
//     let a=12;
//     function efg(){
//       console.log(a);
//     }
//     efg();
// }

// abc();

//7

// let arr=["apple","orange","pinapple","guava","droganfruit"];

// arr.push("mango");
// arr.shift();


//8

// let arr=[1,2,3,4,5,6,7,8];

// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }


//9
// let user={
//     name:"keshab",
//     age:22,
//     city:"chowhatta",
// };

// for(let key in user){
//     console.log(key);
//     // console.log(user[key]);
// }



//10

// setTimeout(function() {
//     console.log("time is up");
// }, 2000);




//11

// let salary={
//     abcd:200,
//     keshab:100,
//     ram:400,
//     sam:400,
// }


// let sum=0;

// for(let key in salary){

//     sum=sum+salary[key];
// }


// console.log(sum);


function runtwice(){

    return  function(){
       return "helllo";
    }
}
let abc=runtwice();
abc();
