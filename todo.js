
$("ul").on("click" ,"li", function(){
    $(this).toggleClass("completed");
});

//click x to delete item
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut().remove(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text' ").keypress(function(){
    if(event.which === 13)
    {
        //taking new todo in a variable
        var todoText=$(this).val();
        $(this).val("");
        //create a new line in list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>")

    }
});