window.onload = function(){
	$('.featured.element-item img').each(function(fadeInDiv) {
		$(this).delay(fadeInDiv * 120).fadeTo(10, 1).css('-webkit-transition', 'all 2.6s ease').css('transition', 'all 2.6s ease');
	});	   
	$('.element-item img').each(function(fadeInDiv) {
	 	$(this).delay(fadeInDiv * 120).fadeTo(10, 1).css('-webkit-transition', 'all 2.6s ease').css('transition', 'all 2.6s ease');
	});	
};

$(document).ready(function(){
	
	$('.masthead-brand').fadeIn(4000);

	//scroll .video-grid-container from anywhere on screen
	var in_sidebar = false;
	$(function() {
	    var $target = $('.video-grid-container');
	    var $target2 = $('#site-wrapper-mobile');
	    var $target3 = $('#mobile-wrapper-wrapper');

	    var viewportWidth = $(window).width();
	    if(viewportWidth > 768){

		    $("body").mousewheel(function(event, delta) {		    	
		    	if(!in_sidebar){
			    	$target.scrollTop($target.scrollTop() - (delta));  /*(delta * 3 or more to speed up scroll)*/
			     	event.preventDefault();	    		
		    	}
		    });

	        $("body").mousewheel(function(event, delta) {
	        	if(!in_sidebar){
	    	    	$target2.scrollTop($target2.scrollTop() - (delta));  /*(delta * 3 or more to speed up scroll)*/
	    	     	event.preventDefault();	    		
	        	}
	        });

            $("body").mousewheel(function(event, delta) {
            	if(!in_sidebar){
        	    	$target3.scrollTop($target3.scrollTop() - (delta));  /*(delta * 3 or more to speed up scroll)*/
        	     	event.preventDefault();	    		
            	}
            });
	    }

	});

	// eliminate the 300ms click delay on mobile browsers https://github.com/ftlabs/fastclick
	$(function() {
	    FastClick.attach(document.body);
	});


	// START PLUGIN
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});	

	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'masonry',
	  masonry: {
	  	columnWidth: 260
	  },
	  filter: '.featured',
	  getSortData: {
	    name: '.name',
	    symbol: '.symbol',
	    number: '.number parseInt',
	    category: '[data-category]',
	    weight: function( itemElem ) {
	      var weight = $( itemElem ).find('.weight').text();
	      return parseFloat( weight.replace( /[\(\)]/g, '') );
	    }
	  }
	});

	$('#container').isotope({ filter: '.your-filter-name' });

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});

	// bind sort button click
	$('#sorts').on( 'click', 'button', function() {
	  var sortByValue = $(this).attr('data-sort-by');
	  $grid.isotope({ sortBy: sortByValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});	

	//sidebar
	var SidebarMenuEffects = (function() {

	 	function hasParentClass( e, classname ) {
			if(e === document) return false;
			if( classie.has( e, classname ) ) {
				return true;
			}
			return e.parentNode && hasParentClass( e.parentNode, classname );
		}

		// http://coveroverflow.com/a/11381730/989439
		function mobilecheck() {
			var check = false;
			(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		}

		function init() {

			var container = document.getElementById( 'st-container' ),
				buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
				// event type (if mobile use touch events)
				eventtype = mobilecheck() ? 'touchstart' : 'click',
				resetMenu = function() {
					classie.remove( container, 'st-menu-open' );
				},
				bodyClickFn = function(evt) {
					if( !hasParentClass( evt.target, 'st-menu' ) ) {
						resetMenu();
						document.removeEventListener( eventtype, bodyClickFn );
						in_sidebar = false;				
					}
				};

			buttons.forEach( function( el, i ) {
				var effect = el.getAttribute( 'data-effect' );

				el.addEventListener( eventtype, function( ev ) {
					ev.stopPropagation();
					ev.preventDefault();
					container.className = 'st-container'; // clear
					classie.add( container, effect );
					setTimeout( function() {
						classie.add( container, 'st-menu-open' );
					}, 25 );
					document.addEventListener( eventtype, bodyClickFn );
				});
			} );

		}

		init();

	})();

	// select sidebar content
	$('#about-trigger').on('click', function(){
	  $('#sidebar-about').css('display', 'unset');
	  $('#sidebar-contact').css('display', 'none');
	  in_sidebar = true;
	});
	$('#contact-trigger').on('click', function(){
	  $('#sidebar-about').css('display', 'none');
	  $('#sidebar-contact').css('display', 'unset');
	  in_sidebar = true;
	});

	//URL queries for category selection, used on page back
	var selected_filter = "";
	$('#filters button').on('click touchstart', function(){
		selected_filter = $(this).attr('data-filter');
		if(selected_filter == "*"){
			selected_filter = ".all";
		}
		$('.element-item > div > a').each(function(){
			var current_href = $(this).attr('href');
			if(current_href.includes('&filter=')){
				current_href = current_href.substring(0, current_href.indexOf('&filter='));
			}
			var new_href = current_href + '&filter=' + selected_filter;
			$(this).attr('href', new_href);
		})
	})

	//get filter from URL on click back
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	var filter = getParameterByName('filter');
	if(filter != null){
		$(filter).click();
	}

	$('.bg_hover').on('mouseenter', function(){
		$(this).css('opacity', '0.7');
		$(this).parent().parent().siblings('.caption-below').addClass('animated fadeOut');
		$(this).parent().parent().siblings('.caption-over').addClass('animated fadeInDown');
		$(this).siblings('img').css('transform', 'scale3d(1.4,1.4,1.4)');
		$(this).siblings('img').css('-webkit-transform', 'scale3d(1.4,1.4,1.4)');
	})
	$('.bg_hover').on('mouseleave', function(){
		$(this).css('opacity', '0');
		$(this).parent().parent().siblings('.caption-below').removeClass('animated fadeOut');
		$(this).parent().parent().siblings('.caption-over').removeClass('animated fadeInDown');
		$(this).siblings('img').css('transform', 'scale3d(1.0,1.0,1.0)');
		$(this).siblings('img').css('-webkit-transform', 'scale3d(1.0,1.0,1.0)');
	})
	$('.bg_hover').on('click', function(){
		$(this).css('opacity', '0');
		$(this).parent().parent().siblings('.caption-below').removeClass('animated fadeOut');
		$(this).parent().parent().siblings('.caption-over').removeClass('animated fadeInDown');
		$(this).siblings('img').css('transform', 'scale3d(1.0,1.0,1.0)');
		$(this).siblings('img').css('-webkit-transform', 'scale3d(1.0,1.0,1.0)');
	})

	//contact content effects
	$('#contact-content #email').on('mouseenter', function(){
		$('#contact-content #email i').replaceWith('<i class="fa fa-share" aria-hidden="true" style="border:2px solid black;border-radius:50%;padding:10px;margin:10px;"></i>');
	})
	$('#contact-content #email').on('mouseleave', function(){
		$('#contact-content #email i').replaceWith('<i class="fa fa-envelope-o" aria-hidden="true" style="border:2px solid black;border-radius:50%;padding:10px;margin:10px;"></i>');
	})
	$('#contact-content #phone').on('mouseenter', function(){
		$('#contact-content #phone i').addClass('animated tada');
	})
	$('#contact-content #phone').on('mouseleave', function(){
		$('#contact-content #phone i').removeClass('animated tada');
	})

});