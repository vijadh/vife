$(document).ready(function(){
	// $(window).scroll(function() {
	//     var scroll = $(window).scrollTop();
	//     if (scroll >= 1) {
	//         $(".me-header").addClass("me-header--affix");
	//     } else {
	//     	$(".me-header--affix").removeClass("me-header--affix");
	//     }
	// });

	// $('a[href*=#]:not([href=#])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	//       	var target = $(this.hash);
	//       	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//       	if (target.length) {
	//         	$('html,body').animate({
	//           		scrollTop: target.offset().top - 54
	//         	}, 500);
	//         	return false;
	//       	}
	//     }
	// });

	// $(window).scroll(function(){
	// 	var winScroll = $(window).scrollTop();
	// 	var menuTitle = $('[data-menu-title]');
		
	// 	$(menuTitle).each(function(){
	// 		_this = $(this).data;

	// 		alert(_this);
	// 	});
	// });


	function handleScroll() {
        if (typeof window.positionScroll !== "undefined") {//Already there is a scroll enabled.
            return;
        }
        window.positionScroll = setTimeout(positionScroll, 250);
    }

	function positionScroll() {        
        var windowTop = $(window).scrollTop();
        var selected = null;
        $('[data-menu-title]').each(function () {
            var thisOffsetTop = $(this).offset().top;
            if (thisOffsetTop <= windowTop + 120) {
                var $selVal = $(this).data("menu-title");
                $($('[data-menu-label]')).text($selVal);
            } else {
                return;
            }
        });            
        delete window.positionScroll;
    }

	$(window).bind({
        // resize: function () {
        //     defaultTrigger();
        // },
        scroll: function () {
            // defaultTrigger();
            handleScroll();
        }
    });

    $('body').click(function(e){
    	if(!$('#menu').is(e.target) && $('#menu').has(e.target).length===0){
    		$('#menu').removeClass("vd-menu--active");
    	}
    });

    $(".vd-menu__label").click(function(){
    	$(this).closest('.vd-menu').toggleClass('vd-menu--active');
    });
});

// //typeform enquiry script
// (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()