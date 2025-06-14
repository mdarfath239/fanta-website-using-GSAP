var tl =  gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: 1,
   
  
  }
})

tl.to(".fanta",{
  top: "115%",
  left: "10%",

 
},"<")
tl.to(".orangeslice",{
  top: "160%",
  left: "30%",
 
},"<")
tl.to(".orange",{
  top: "160%",
  left: "70%",
 
},"<")
tl.to(".leaf",{
  top: "97%",
  left: "80%",
 
},"<")
tl.to(".leaf2",{
  top: "97%",
  left: "5%",
 
},"<")

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: 1,
  }
})
t2.from(".lemon",{
  top: "110%",
  left: "-100%",
  rotate:"-90deg",
 
},"ca")

t2.from(".cocacola",{
  top: "120%",
  left: "-100%",
  rotate:"-90deg",
 
},"ca")

t2.from(".lemon2",{
  top: "110%",
  left: "100%",
  rotate:"90deg",
 
},"ca")

t2.from(".pepsi",{
  top: "120%",
  left: "100%",
  rotate:"90deg",
 
},"ca")

t2.to(".fanta",{
top: "205%",
left:"35%"
 
},"ca")
t2.to(".orangeslice",{
  top: "205%",
  left:"35%"
 
},"ca")
