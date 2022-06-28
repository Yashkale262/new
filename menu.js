var menu=0;
document.querySelector('.menu').addEventListener("click",function(){
  if(menu==0){
    document.querySelector('.navbar').style.display="flex";
    menu=1;
  }
  else{
    document.querySelector('.navbar').style.display="none";
    menu=0;
  }
})

document.querySelector('.menu-contact').addEventListener("click",function(){
  window.location.href = "./contact.html";
})
document.querySelector('.menu-about').addEventListener("click",function(){
  window.location.href = "./about.html";
})
document.querySelector('.menu-seller').addEventListener("click",function(){
  window.location.href = "./seller.html";
})
document.querySelector('.menu-home').addEventListener("click",function(){
  window.location.href = "./index.html";
})
