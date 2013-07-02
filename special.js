var stage;
var startSim = function() {
	$("#button").fadeOut();
	$("#picarea").append("<img src='metal.png' width=600 height=450>");
	$("#picarea").fadeIn();
	$("#caption").text("Here you see a piece of metal.");
	$("#next").fadeIn();
	stage = 1;
};
var startSim2 = function() {
	if (stage == 1) {
		$("#picarea").text("");
		$("#picarea").append("<img src='metalrust1.png' width=600 height=450>");
		$("#caption").text("Now here is that same piece of metal, but rusted. Here is an explanation as to how this could have happened: When water droplets gather on an iron object, the water combines with the carbon dioxide and creates a weak acid, which starts to dissolve the iron. Soon some water begins to break down into its chemical components, one of which is oxygen. This oxygen and the dissolved iron turn into iron oxide, also known as rust.");
		stage = 2;
	} else if (stage == 2) {
		$("body").text("");
		$("head").append("<style>body{background-color: #000000; color: #cc5079;} .wiggle { font-weight: bold; margin: 0 auto; font-size: large;}</style>");
		$("body").append("<h1 class='wiggle'>HAPPY BIRTHDAY SIS :)</h1>");
		$(".wiggle").ClassyWiggle();
};