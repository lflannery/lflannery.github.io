//Homepage Content Script
var homepage_content ={

    handlerData:function(resJSON){

        var template = Handlebars.templates['homepage'],

            content = template(resJSON);

			$('#content-home').html(content);
        
    },
    loadContent : function(){

        $.ajax({
            url:"https://lflannery.github.io/zerkcms/json/homepage.json",
            method:'get',
            success:this.handlerData

        })
    } 
};

$(document).ready(function(){

    homepage_content.loadContent();
});

var submitted_content ={

    handlerData:function(resJSON){

        var template = Handlebars.templates['submitted'],

            content = template(resJSON);

            $('#content-submitted').html(content);
        
    },
    loadContent : function(){

        $.ajax({
            url:"https://lflannery.github.io/zerkcms/json/homepage.json",
            method:'get',
            success:this.handlerData

        })
    } 
};

$(document).ready(function(){

    submitted_content.loadContent();
});

//Footer

var footer_template = Handlebars.templates['footer'];

$(document.getElementById("content-footer")).append(footer_template);

//Header

var header_template = Handlebars.templates['header'];

$(document.getElementById("content-header")).append(header_template);

//Form Helper
HandlebarsFormHelpers.register(Handlebars);