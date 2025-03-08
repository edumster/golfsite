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

function page3ani(){
  var video  = document.querySelector(".page3 video")
var play = document.querySelector(".play")
play.addEventListener("click",function(){
  video.play()
 
gsap.to(video,{
  transform:"scaleX(1) scaleY(1)",
    opacity:1,
})
})
video.addEventListener("click",function(){
  video.pause()
  
gsap.to(video,{
  transform:"scaleX(0.7) scaleY(0)",
    opacity:0,
    borderRadius:"0%",
    duration: 1, // Add duration for smooth animation
    
    ease: "power3.in" // Smooth easing
})
})
}


page3ani();
gsap.to("nav", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: "nav",
    start: "top -10%",
    end: "top -30%",
    scrub: 1,
    markers: true,
    toggleActions: "play reverse play reverse" // Ensures it appears when scrolling back
  }
});


var img = document.querySelector(".right-sec img")
var video = document.querySelector(".right-sec video")

