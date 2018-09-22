var CONTENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#handlebars-blog").html(),

                template = Handlebars.compile(templateSource),

                content = template(resJSON);

           $('#mainBlog').html(content);
            
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

    CONTENT_METHOD.loadContent();
});

var NEWS_CONTENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#handlebars-news").html(),

                template = Handlebars.compile(templateSource),

                content = template(resJSON);

           $('#mainNews').html(content);
            
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

    NEWS_CONTENT_METHOD.loadContent();
});


var HOME_CONTENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#handlebars-home").html(),

                template = Handlebars.compile(templateSource),

                content = template(resJSON);

           $('#mainHome').html(content);
            
        },
        loadContent : function(){

            $.ajax({
                url:"https://lflannery.github.io/headlessAPI/json/homepage.json",
                method:'get',
                success:this.handlerData

            })
        } };

$(document).ready(function(){

    HOME_CONTENT_METHOD.loadContent();
});


Handlebars.registerHelper('link', function(title) {

    url  = title.replace(/[^a-zA-Z0-9 ]/g, "");
    result = url.replace(/ /g, "-");
    
    return new Handlebars.SafeString(result);

});


/*
Handlebars.registerHelper('formatDate', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});

var helpers = require('handlebars-helpers')();
*/