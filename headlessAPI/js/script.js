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
