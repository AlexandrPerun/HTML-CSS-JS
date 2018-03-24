
$(".oval").mouseenter(function(){

	$(".triangle1").addClass("loader");
	console.log("success");
}
)

$(".oval").mouseenter(function(){

	$(".triangle2").addClass("transleter");
	console.log("success");
	
}
)
 $(".oval").mouseleave(function(){

	$(".triangle2").addClass("stop");
	console.log("success");
}
)
 $(".oval").mouseleave(function(){

	$(".triangle1").addClass("stop");
	console.log("success");
}
)