var jqueryNoConflict = jQuery;

//begin main function
jqueryNoConflict(document).ready(function(){
    retriveData();
});
//end main function

// grab data
function retriveData() {
    var dataSource = 'https://lflannery.github.io/headlessAPI/json/blog.json';
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate);
};

// create projects content template
function renderDataVisualsTemplate(data){
    getTemplateAjax('index.html', function(template) {
        handlebarsDebugHelper();
        jqueryNoConflict('#handlebars-demo').html(template(data));
    })
};

// render handlebars templates via ajax
function getTemplateAjax(path, callback) {
    var source, template;
    jqueryNoConflict.ajax({
        url: path,
        success: function (data) {
            source = data;
            template = Handlebars.compile(source);
            if (callback) callback(template);
        }
    });
}
//end

// add handlebars debugger
function handlebarsDebugHelper(){
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
    });
};
// end