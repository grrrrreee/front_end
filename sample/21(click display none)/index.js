$('html').click(function(e){
    if(!$(e.target).hasClass("input_search")){
        $("div#layer").css("display","none");
    }
})