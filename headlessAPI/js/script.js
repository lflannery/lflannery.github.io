//Main Nav Script

var content = {
	"link_one" : "Home",
	"link_two" : "Blog",
	"link_three": "News"
}

var template = Handlebars.templates['mainNav'](content);

$(document.getElementById("main-nav")).append(template);


//Homepage Content Script
var homepage_content ={

    handlerData:function(resJSON){

        var template = Handlebars.templates['homepage'],

            content = template(resJSON);

			$('#content-home').html(content);
        
    },
    loadContent : function(){

        $.ajax({
            url:"https://lflannery.github.io/headlessAPI/json/homepage.json",
            method:'get',
            success:this.handlerData

        })
    } 
};

$(document).ready(function(){

    homepage_content.loadContent();
});


//News Listing Script
var news_content ={

    handlerData:function(resJSON){

        var template = Handlebars.templates['news'],

            content = template(resJSON);

			$('#content-news').html(content);
        
    },
    loadContent : function(){

        $.ajax({
            url:"https://lflannery.github.io/headlessAPI/json/news.json",
            method:'get',
            success:this.handlerData

        })
    } 
};

$(document).ready(function(){

    news_content.loadContent();
});

//Blog Listing Script
var blog_content ={

    handlerData:function(resJSON){

        var template = Handlebars.templates['blog'],

            content = template(resJSON);

			$('#content-blog').html(content);
        
    },
    loadContent : function(){

        $.ajax({
            url:"https://lflannery.github.io/headlessAPI/json/blog.json",
            method:'get',
            success:this.handlerData

        })
    } 
};

$(document).ready(function(){

    blog_content.loadContent();
});

Handlebars.registerHelper('link', function(title) {

    url  = title.replace(/[^a-zA-Z0-9 ]/g, "");
    result = url.replace(/ /g, "-");
    
    return new Handlebars.SafeString(result);

});

$(function(){
    var current = location.pathname;
    $('#nav li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})