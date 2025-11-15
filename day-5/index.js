//1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }


// function print(){
//     console.log("hello");
// }

// runTwice(print);



// function runTwice(fu){

//     fu();
//     fu();
// }

// runTwice(function(){
//     console.log("hello");
// });



//2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.




// function add(a){//pure  function
//     return a+2;
// }


// add(2);
// add(2);



// let a=12;
// function abcd(){
// return Math.random()+a;

// }

// console.log(abcd());
// console.log(abcd());



//or

// let  count=0;
// function impure(a){

// count++;
// console.log(a+count);

// }


// impure(10);
// impure(10);




//3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.


// function abcd(obj){
// let {name,age}=obj;

// console.log(name);
// console.log(age);

// }
// abcd({name:"ram",age:22});




// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).

// function abcd(){
//     console.log(this);
// }

// abcd();


// let efg=()=>{

//     // console.log(this);

//     uesr={
//         name:"ram",
//         show: function(){
//             console.log(this);
//         }
//     }

//     user.show();
// }

// efg();



// let obj={
//     name:"hey",
//     fnc: function(){
//         // console.log(this);// object


//     },
//     fnc2: ()=>{
//         console.log(this);// window 
//     }
// }


// obj.fnc();
// obj.fnc2();





// let obj={
//     name:"hey",
//     fnc: function(){
//     let fnc2 =()=>{
//         console.log(this);//  it is give  object   beacuse  arrow 
//                          // arrow function is rely on parent
//     }
//     fnc2();
//     }

// }


// obj.fnc();




// let obj={
//     name:"hey",
//     fnc: function(){
//     function fnc2(){
//         console.log(this);// it was  rebine every thing  and it was  give  window 
//     }
//     fnc2();
//     }

// }


// obj.fnc();


// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.



// let arr=[1,2,3,4,5,6];

// let newarr=arr.map(function(val){
//  return  val*val;
// })

// console.log(newarr);


// 6. Use `filter()` to get only even numbers from an
// array.



// let arr=[1,2,3,6,5,4,8,7,9];

// let newarr=arr.filter(function(val){
//     return val%2===0;
// });


// console.log(newarr);



// let arr=[1,2,3,6,5,4,8,7,9];

// let newarr=arr.map(function(val){
//     return  val%2===0;
// });


// console.log(newarr);

//7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.


// let salary=[1000, 2000, 3000];

// let newarr=salary.reduce(function(acc,rec){
// return acc+rec;
// },0);

// console.log(newarr);





// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).


// let names=["hello","hey","ram","sam"];


// let value=names.some(function(val){//  some chack only one value 
//   return names.length>3;
// });


// console.log(value);



// let names=["hello","hey","ram","sam","om"];

// let newarr=names.every(function(val){
//     return val.length>3;
// });
// console.log(newarr);





// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.


// let user={
//     name:"ram",
//     age:22,
// }

// Object.freeze(user);
// user.name="sam";


// console.log(user.name);


// let user={
//     name:"ram",
//     age:22,
// }

// Object.seal(user);
// user.name="sam";
// user.socila="facebook";

// console.log(user.name);




//10. Create a nested object (`user → address → city`) and
// access the city name inside it.

let user={
    name:"abcd",
    address:{
      city:"chowhatta",
      lat:55.23,
    }
}

// user.address.city;

let {city,lat}=user.address;
console.log(city);
console.log(lat);










