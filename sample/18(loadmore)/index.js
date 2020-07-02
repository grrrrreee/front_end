$(function(){
    $("div.line").slice(0, 10).show();
    $("#load").click(function(e){
        e.preventDefault();
        $("div.line:hidden").slice(0, 10).show();
        if($("div.line:hidden").length == 0){
            alert("No more divs");
        }
    })
})

