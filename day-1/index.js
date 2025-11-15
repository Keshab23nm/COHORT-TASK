// let maxlimit=1000;
// let num;
// for(let i=1;i<=3; i++){
//     num=prompt("enter amount");

//     if(num===null){
//         console.error("you  entered  cancaled");
//     }

//     if(num.trim()===""){
//         console.error("you entered nothing")
//     }

//     let num2=parseInt(num);

// //    console.log(num2);


// if(maxlimit>=num2){

//     if(num2===maxlimit){
//         console.log("your limit  cross");
//         break;
//     }
// maxlimit=maxlimit-num2;


//   console.log(maxlimit);
// console.log("deduct");
    
// }
// else{
//     console.log("Insufficient balance");
// }
// }



// let maxtana=1000;
// let num=prompt("enterthe number");
// let count=1;
// if(num===null){
//     console.log("you entered cancle");
// }
// else{
//     let num2=Number(num);

//     if(num2===maxtana){
// console.log("your  limit is end ");
//     }

//     else if(num2<0){
//      console.error("enter the right  number");
//     }
//     else{

//         while(num2!==maxtana){
//         maxtana=maxtana-num2;
//         console.log(`wirdral ammount ${num2}`);
//         console.log(`  remaning blance${maxtana}`);
//         if(count===3){

//             break;
//         }


//         count++;
//          num2=+prompt("enter the number");

//     }
//     }

// }






















// while(12){

//     let num=prompt("enter teh number");
//     console.log(num);
//     if(num%2==0){
//         break;
//     }
// }




// question1
// Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// Level 1 – Pure Beginner Practice

// let age=prompt("enter the number");

// if(age===null){
//     console.error("you entered cancle");
// }
// else{
//     if(age.trim()===""){
//         console.log("please enter the age ");
//     }
//     else{
//       age=Number(age);

//       if(isNaN(age)){
//         console.error(" wright a number");
//       }
//       else{
//         if(age>=18){
//             console.log("Eligible");
//         }
//         else{
//             console.log("Not eligible");
           
//         }
//       }
//     }
// }


















// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i=1; i<=10; i++){
//     console.log(`5x${i}=${5*i}`);
// }



// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.



// let count=0;
// for(let i=1; i<=15;i++){
//     // console.log(i);
//     if(i>8){
//         count++;
//     }
// }

// console.log(`this ${count} total number greater hen 8 between 1 to 15`);


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let pass=+prompt("enter the pass word");

// if(pass===123456){
//     console.log("correct password");
// }
// else{
//     console.log("tryagain");
// }



// Level 2 – Slightly Tougher but Logical



// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”




// for(let i=1; i<=3;i++){

//     let pass=+prompt("enter the numebr");

//     if(pass===123456){
//         console.log("account poened");
//         break;
//     }

//     else{
//         console.log("Account locked");
//     }


// }



// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


// let  count=0;
//  while(12){
//     let type=prompt("enter any thin yes or stop");

//     if(type==="stop"){
//         break;
//     }
//     else{
//         count++;
//     }
//  }
//  console.log(`you  type  yes ${count} time`);



// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.


// for(let i=1; i<=50; i++){

//     if(i%7===0){
//         console.log(i);
//     }
// }




// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.


// let sum=0;
// for(let i=1; i<=30; i++){

//    if(i%2!==0){
//     sum=sum+i;
//    } 
// }

// console.log(`tht total number of odd number is ${sum}`);



// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.



// while(true){

//     let num=+prompt("enter a number");
//     if(num%2===0){
//         break;
//     }

// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.



// let num1=+prompt("enter the start number");
// let num2=+prompt("enter the end number");

// for(let i=num1; i<=num2; i++){

//     console.log(i);
// }





let pass="keshab";
let count=1;
let password=prompt("enter the password");

if(password===null){
    console.error("you entered  cancled");
}
else{


    while(password !== pass){

        if(count===3){
            break;
        }
        count++;
        password=prompt("entered  a password");


    }
if(password===pass){
    console.log("password matched");
}
    
 }
