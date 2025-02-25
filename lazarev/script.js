 var na=document.querySelector("nav")
 var nb=document.querySelector(".nav-bottom")
 na.addEventListener("click",function(){
   var tl= gsap.timeline() 
   tl.to(".nav-bottom",{
       
      height:"36vh"    
     })
   tl.to(".nav-elem h5",{
       display:"block" 
    })
   tl.from(".nav-elem h5 span",{
       y:25,
      
       duration:0.3,
       stagger:{
         amount:0.6
       }
    })
  
 })
 na.addEventListener("mouseleave",function(){
   var tl =gsap.timeline()
   tl.to(".nav-elem h5 span",{
       y:0,
      
       duration:0.3,
       stagger:{
         amount:0.2
       }
    })

  tl.to(".nav-elem h5",{
       display:"none", 
       duration:0.1
    })
   tl.to(".nav-bottom",{
       
      height:"0vh"    
     })
 })


function page2ani(){
  
 var pr= document.querySelectorAll('.right-elem')



 pr.forEach(function(e){
 e.addEventListener("mouseenter",function(){
  gsap.to(e.childNodes[3],{
    opacity:1,
    scale:1
  })
 })
 e.addEventListener("mousemove",function(dets){
  gsap.to(e.childNodes[3],{
   x:dets.x - e.getBoundingClientRect().x - 50,
   y:dets.y - e.getBoundingClientRect().y - 50
  })
 })
 e.addEventListener("mouseleave",function(){
  gsap.to(e.childNodes[3],{
    opacity:0,
    scale:0
  })
 })
}
)
}
page2ani()