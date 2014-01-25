$( document ).ready(function() {
	$("#menu-button").click(function(){
		$("#main-menu").toggle();
	});
	
	$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
		effect: 'fade',
        testMode: true,
        onChange: function(evt){
        	var pages = ["/", "/nosotros", "/proyectos", "/servicios", "/clientes", "/contactenos"];
        	var pages_en = ["/en/", "/en/about", "/en/projects", "/en/services", "/en/customers", "/en/contact"];
        	
        	if(evt.selectedItem == "en"){
        		var index = jQuery.inArray( window.location.pathname, pages );
        		window.location.pathname = pages_en[index];
        	}
        	
        	if(evt.selectedItem == "es"){
        		var index = jQuery.inArray( window.location.pathname, pages_en );
        		window.location.pathname = pages[index];
        	}
        	
        }
//        ,afterLoad: function(evt){
//            alert("The selected language has been loaded");
//        },
//        beforeOpen: function(evt){
//            alert("before open");
//        },
//        afterOpen: function(evt){
//            alert("after open");
//        },
//        beforeClose: function(evt){
//            alert("before close");
//        },
//        afterClose: function(evt){
//            alert("after close");
//        }
	});
});
