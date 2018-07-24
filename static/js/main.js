jQuery(document).ready(function($) {
	// Auto-handle direct jpeg links
	// $('a[href$="jpg"]').each(function() {
 //        $(this).colorbox({
 //            maxWidth: '100%',
 //            maxHeight: '100%'
 //        });
	// });

    //Auto handle direct image links, grouping per paragraph
    $('p').each(function(index) {
        $(this).find('a[href$="jpg"],a[href$="jpeg"],a[href$="png"],a[href$="gif"],a[href$="tif"]').colorbox({
            maxWidth: '100%',
            maxHeight: '100%',
            rel: 'group1'.concat(index)            
        });
    });

    //.css('border', '2px solid red');			//useful to see what it's finding

    //center paragraph contents of paragraphs that have images in them
    // $("p:has(img)").css("text-align", "center");
    // $("p:has(img)").css("-moz-text-align-last", "center");
    // $("p:has(img)").css("text-align-last", "center");
    
    

});
