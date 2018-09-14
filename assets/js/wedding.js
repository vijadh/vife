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
                var $selLabel = $(this).data("menu-title");
                $($('[data-menu-label]')).text($selLabel);

                var $selId = $(this).attr("id");
                $("[data-menu-item]").removeClass('vdw-menu__item--active');
                $('[data-menu-item="'+$selId+'"]').addClass('vdw-menu__item--active');
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
    		$('#menu').removeClass("vdw-menu--active");
    	}
    });

    $(".vdw-menu__label").click(function(){
    	$(this).closest('.vdw-menu').toggleClass('vdw-menu--active');
    });

    // $('[vipic-slider="true"]').sly();



    var $frame  = $('[vipic-slider="true"]');
    var $slidee = $frame.children('[vipic-slider-child="true"]').eq(0);
    var $wrap   = $frame.parent('[vipic-slider-parent="true"]');

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 3,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        forward: $wrap.find('.forward'),
        backward: $wrap.find('.backward'),
        prev: $wrap.find('.prev'),
        next: $wrap.find('.next'),
        prevPage: $wrap.find('.prevPage'),
        nextPage: $wrap.find('.nextPage')
    });

    // To Start button
    $wrap.find('.toStart').on('click', function () {
        var item = $(this).data('item');
        // Animate a particular item to the start of the frame.
        // If no item is provided, the whole content will be animated.
        $frame.sly('toStart', item);
    });

    // To Center button
    $wrap.find('.toCenter').on('click', function () {
        var item = $(this).data('item');
        // Animate a particular item to the center of the frame.
        // If no item is provided, the whole content will be animated.
        $frame.sly('toCenter', item);
    });

    // To End button
    $wrap.find('.toEnd').on('click', function () {
        var item = $(this).data('item');
        // Animate a particular item to the end of the frame.
        // If no item is provided, the whole content will be animated.
        $frame.sly('toEnd', item);
    });

    // Add item
    $wrap.find('.add').on('click', function () {
        $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
    });

    // Remove item
    $wrap.find('.remove').on('click', function () {
        $frame.sly('remove', -1);
    });
});

// //typeform enquiry script
// (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()