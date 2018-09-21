/**
 * Created by saan on 10/11/13.
 */

var STUDENT_METHOD ={

        handlerData:function(resJSON){

            var templateSource   = $("#student-template").html(),

                template = Handlebars.compile(templateSource),

                studentHTML = template(resJSON);

           $('#my-container').html(studentHTML);
            
        },
        loadStudentData : function(){

            $.ajax({
                url:"https://lflannery.github.io/HandleBarDemo/data/studentData.json",
                method:'get',
                success:this.handlerData

            })
        }
};

$(document).ready(function(){

    STUDENT_METHOD.loadStudentData();
});