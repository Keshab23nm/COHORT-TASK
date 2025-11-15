//1

// let pass="keshab";
// let count=0;
// let password=prompt("ente  the password");
// count++;
// if(pass===password){

//     console.log("password matched ");
// }

// else{

//     while(pass !== password){

//         if(count===3){
//             break;
//         }
//         count++;
//         password=prompt("ente  the password");


//     }

//     if(pass===password){
//         console.log("password  is matched");
//     }
//     else{
//         console.error("account locked");
//     }
// }







// maxlimit=1000;
// let count=0;

// let amount=+prompt("enter the  amount");
// count++;

// if(amount===maxlimit){
//     console.log("limit cross");
// }

// else{

//     while(maxlimit>=amount){

//           maxlimit=maxlimit-amount;

//         console.log(maxlimit);
//         console.log(amount);
//         if(count===3){
//             break;
//         }
//         count++;
     
      
//         amount=+prompt("enter the  amount");
//     }
// }



//  word do

// let count=0;
// let word=prompt("enter  any  word");


// while(word !== "stop"){

//  word=prompt("enter  any  word");

//     if(word==="yes"){

//         count++;
//     }


//     // if(word==="stop"){
//     //   break;
//     // }
// }

// console.log(`the total number of yes  ${count}`);



// for(let i=1; i<=50; i++){


//     if(i%7===0){
//         console.log(i);
//     }
// }







 
// let sum=0;
// for(let i=1; i<=30; i++){


//     if(i%2 !==0){
//         sum=sum+i;
//     }
// }

// console.log(`the sum of all odd number is ${sum}`);








// let num=+prompt("enter  any number");

// while(num%2 !==0){
//     num=+prompt("enter  any number");

// }

// if(num%2 ===0){
//     console.log("you entered  even number");
// }









// let num1=+prompt("enter the start");
// let num2=+prompt("enter the end");


// if(num1>num2){
//     console.log("the  first one is bigger then second one");
// }
// else{
// for(let i=num1; i<=num2; i++){

//     console.log(i);
// }
// }




let count=0;

for(let i=1; i<=20; i++){


        if(count===3){
        break;
    }
    if(i%2 !==0){
        console.log(i);
        count++;
    }


}