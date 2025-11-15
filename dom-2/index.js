let arr=[
    {
       Team: "CSK",
       PrimaryColour:"Yellow",
       SecondaryColour:"orange",
        trophis:5,
        caption:"MS Dhoni",
        full:"Chennai Super Kings"
    },
        {
       Team: "DC",
       PrimaryColour:"red",
       SecondaryColour:"blue" ,
          trophis:0,
        caption:"Axar Patel",
        full:"Delhi Capitals"
    },
        {
       Team: "GT",
       PrimaryColour:"navy",
       SecondaryColour:"lightblue" ,
           trophis:1,
        caption:"Shubman Gill",
        full:"Gujarat Titans"
    },
    
        {
       Team: "KKR",
       PrimaryColour:"purple",
       SecondaryColour:"gold" ,
           trophis:3,
        caption:"Ajinkya Rahane",
        full:"Kolkata Knight Riders"
    },
    
        {
       Team: "LSG",
       PrimaryColour:"darkblue",
       SecondaryColour:"orange" ,
           trophis:0,
        caption:"Rishabh Pant",
        full:"Lucknow Super Giants"
    },
        {
       Team: "MI",
       PrimaryColour:"blue",
       SecondaryColour:"gold" ,
           trophis:5,
        caption:"Hardik Pandya",
        full:"Mumbai Indians"
    },
     {
       Team: "PBKS",
       PrimaryColour:"red",
       SecondaryColour:"yellow" ,
           trophis:0,
        caption:"Shreyas Iyer",
        full:"Punjab Kings"
    }, {
       Team: "RR",
       PrimaryColour:"pink",
       SecondaryColour:"blue" ,
           trophis:1,
        caption:"Sanju Samson",
        full:"Rajasthan Royals"
    }, {
       Team: "RCB",
       PrimaryColour:"red",
       SecondaryColour:"black" ,
           trophis:1,
        caption:"Rajat Patidar",
        full:"Royal Challengers Bengaluru"
    }, {
       Team: "SRH",
       PrimaryColour:"orange",
       SecondaryColour:"black",
           trophis:1,
        caption:"Pat Cummins",
        full:"Sunrisers Hyderabad"
    }


];


let h2=document.querySelector('h2');
let button=document.querySelector('button');
let box=document.querySelector('.box');
 let trof = document.querySelector('.one');
    let cname = document.querySelector('.two');
    let tname = document.querySelector('.three');
    let main=document.querySelector('main');


// console.log(arr[0].Team);

button.addEventListener('click',function(){
  
    // h1.innerHTML="hey"

    let num=Math.floor(Math.random()*arr.length);
    // console.log(num);
    h2.innerHTML=arr[num].Team;
    box.style.backgroundColor=arr[num].PrimaryColour;
    main.style.backgroundColor=arr[num].SecondaryColour;
    trof.innerHTML=arr[num].trophis;
  cname.innerHTML=arr[num].caption;
  tname.innerHTML=arr[num].full;
  



})