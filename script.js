var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets) {

	crsr.style.left=dets.x +"px"
	crsr.style.top=dets.y + "px"
	crsrblr.style.left=dets.x - 250 + "px"
	crsrblr.style.top=dets.y - 250 + "px"
})


gsap.to("#nav",{
	
	backgroundColor :"black",
	duration : 0.5,
	height : "110px",
	scrollTrigger : {
		trigger : "#nav",
		scroller : "body",
		// markers : true,
		start : "top -10%",
		end : "top -11%",
		scrub : 1
	}
}) 
gsap.to("#main",{
	backgroundColor : "#000",
	scrollTrigger : {
		trigger : "#main",
		scroller : "body",
		start : "top -25%",
		end : "top -75%",
		scrub : 2
	}
})