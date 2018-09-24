'use strict';

function(){

    $.ajax({
        url:"https://lflannery.github.io/reactdemo/json/blog.json",
        method:'get',
        success:this.handlerData,
        console.log(handlerData)

    });