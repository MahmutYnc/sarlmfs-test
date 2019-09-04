$(function() {

    //gets the position horizontally and vertically of the element
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countupFinished = false;

	    $(window).scroll(function() {
	    	if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

	    		    $('.chart').easyPieChart({
				        easing: 'easeInOut',
				        barColor: '#fff',
				        scaleColor: false,
				        trackColor: false,
				        lineWidth: 4,
				        size: 152,
				        onStep: function(from, to, percent) {
				        	$(this.el).find('.percent').text(Math.round(percent));
				        }
				    });
	    	}

	    	if (!countupFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
	    		$(".counter").each(function() {
	    			easing: 'easeInOut';
					var element = $(this);
					var endVal = parseInt(element.text());
					console.log(endVal);


					element.countup(endVal);

					countupFinished = true;


				})

	    	}
    });

    $("[data-fancybox]").fancybox();
