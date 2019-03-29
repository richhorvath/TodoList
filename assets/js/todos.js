//check off todos by clicking

//when a li is clicked inside the parent ul
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which ===13){
		//todo text
		var todoText = $(this).val();
		$(this).val("");

		//create new LI and and to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})