$(document).ready(function(){
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if (scroll >= 1) {
	        $(".me-header").addClass("me-header--affix");
	    } else {
	    	$(".me-header--affix").removeClass("me-header--affix");
	    }
	});

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html,body').animate({
	          		scrollTop: target.offset().top - 54
	        	}, 500);
	        	return false;
	      	}
	    }
	});
});

// //typeform enquiry script
// (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()