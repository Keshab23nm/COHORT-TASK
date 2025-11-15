let arr=[
    {
       Team: "CSK",
       PrimaryColour:"Yellow",
       SecondaryColour:"orange",
        trophis:5,
        caption:"MS Dhoni",
        full:"Chennai Super Kings",
        images:"https://i.pinimg.com/736x/ca/4f/cb/ca4fcbad2a16f3ca2d3ca9e88710d290.jpg"
    },
        {
       Team: "DC",
       PrimaryColour:"red",
       SecondaryColour:"blue" ,
          trophis:0,
        caption:"Axar Patel",
        full:"Delhi Capitals",
        images:"https://i.pinimg.com/1200x/59/6a/7f/596a7fc1c590d81887ef78ce77b19e46.jpg"
    },
        {
       Team: "GT",
       PrimaryColour:"navy",
       SecondaryColour:"lightblue" ,
           trophis:1,
        caption:"Shubman Gill",
        full:"Gujarat Titans",
        images:"https://i.pinimg.com/736x/a5/6b/2e/a56b2ee19bd4a6e8a54c736e1b420ccd.jpg"

    },
    
        {
       Team: "KKR",
       PrimaryColour:"purple",
       SecondaryColour:"gold" ,
           trophis:3,
        caption:"Ajinkya Rahane",
        full:"Kolkata Knight Riders",
        images:"https://i.pinimg.com/1200x/0b/a4/1c/0ba41c8db8e657b6a9d0070bb61f1e4a.jpg"
    },
    
        {
       Team: "LSG",
       PrimaryColour:"darkblue",
       SecondaryColour:"orange" ,
           trophis:0,
        caption:"Rishabh Pant",
        full:"Lucknow Super Giants",
        images:"https://i.pinimg.com/736x/5b/e6/8d/5be68dce626ffe60a94a1d3e07c8f5db.jpg"
    },
        {
       Team: "MI",
       PrimaryColour:"blue",
       SecondaryColour:"gold" ,
           trophis:5,
        caption:"Hardik Pandya",
        full:"Mumbai Indians",
        images:"https://i.pinimg.com/736x/d6/14/5f/d6145f4ba2784ec6313daef64b6aa99b.jpg"
    },
     {
       Team: "PBKS",
       PrimaryColour:"red",
       SecondaryColour:"yellow" ,
           trophis:0,
        caption:"Shreyas Iyer",
        full:"Punjab Kings",
        images:"https://i.pinimg.com/1200x/c7/31/da/c731dae998ec06de0047afd102d7e8e0.jpg"
    }, {
       Team: "RR",
       PrimaryColour:"pink",
       SecondaryColour:"blue" ,
           trophis:1,
        caption:"Sanju Samson",
        full:"Rajasthan Royals",
        images:"https://i.pinimg.com/1200x/55/9d/69/559d69bbcc623af115a0a749da6cce19.jpg"
    }, {
       Team: "RCB",
       PrimaryColour:"red",
       SecondaryColour:"black" ,
           trophis:1,
        caption:"Rajat Patidar",
        full:"Royal Challengers Bengaluru",
        images:"https://i.pinimg.com/1200x/0f/a9/3a/0fa93afa52d3eac0b71135c0b493112b.jpg"
    }, {
       Team: "SRH",
       PrimaryColour:"orange",
       SecondaryColour:"black",
           trophis:1,
        caption:"Pat Cummins",
        full:"Sunrisers Hyderabad",
        images:"https://i.pinimg.com/1200x/d2/a1/77/d2a177e722cd189ad6fca15fe2644d3e.jpg"
    }


];


let h2=document.querySelector('h2');
let button=document.querySelector('button');
let box=document.querySelector('.box');
 let trof = document.querySelector('.one');
    let cname = document.querySelector('.two');
    let tname = document.querySelector('.three');
    let main=document.querySelector('main');
    let img=document.querySelector('img');


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

//   img.setAttribute("src","https://i.pinimg.com/736x/ca/4f/cb/ca4fcbad2a16f3ca2d3ca9e88710d290.jpg");
  
img.setAttribute('src',arr[num].images);



})