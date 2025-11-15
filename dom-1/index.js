let h1=document.querySelector('h1');
let inc=document.querySelector('#inc');
let dec=document.querySelector('#decc');
let back=document.querySelector('#col');



let a=0;
inc.addEventListener('click', function() {
    // console.log("hello");
  a++;
  h1.innerHTML=a;
  h1.style.color="green";
  back.style.backgroundColor="black";

});


dec.addEventListener('click', function() {
    a--;
  h1.innerHTML=a;
  h1.style.color="red";
  back.style.backgroundColor="white";

});
