let btn=document.querySelector('button');
let main=document.querySelector('main');

let arr= newArr = [
    "function",
    "variable",
    "event listener",
    "callback",
    "promise",
    "async await",
    "DOM manipulation",
    "arrow function"
];


btn.addEventListener('click',function(){

    // console.log('hello');
   let h1= document.createElement('h1');
   let x=Math.random()*80;
   let y=Math.random()*80;
   let sc=Math.random()*4;
   let rot=Math.floor(Math.random()*361);
   let a=Math.floor(Math.random()*arr.length);
   console.log(sc);
   console.log(rot);
   console.log(a);



 h1.textContent=arr[a];
 h1.style.color='white';
 h1.style.position='absolute';
 h1.style.top=x+'%';
 h1.style.left=y+'%';
 h1.style.scale=sc;
 h1.style.rotate=rot+'deg';
   main.appendChild(h1);
   console.log(h1.textContent);
    main.style.backgroundColor='black';
})