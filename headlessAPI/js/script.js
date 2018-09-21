var CONTENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#handlebars-demo").html(),

                template = Handlebars.compile(templateSource),

                content = template(resJSON);

           $('#main').html(content);
            
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