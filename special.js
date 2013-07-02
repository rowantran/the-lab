var startSim = function() {
	$("#button").fadeOut();
	$("#picarea").append("<img src='metal.png' width=600 height=450>");
	$("#picarea").fadeIn();
	$("#caption").text("Here you see a piece of metal.");
	$("#next").fadeIn();
};
var startSim2 = function() {
	$("#picarea").text("");
	$("#picarea").append("<img src='metalrust1.png' width=600 height=450>");
	$("#caption").text("When water droplets gather on an iron object, the water combines with the carbon dioxide and creates a weak acid, which starts to dissolve the iron. Soon some water begins to break down into its chemical components, one of which is oxygen. This oxygen and the dissolved iron turn into iron oxide, also known as rust.");
};