var displayComposition = function(molecule) {
  $("#currentview").text("Currently viewing:");
  $("#image").text("");
  if (molecule == "salt") {
    var text = " <b>Table salt</b>";
    $("#image").append("<img src='salt.png'>");
  } else if (molecule == "water") {
    var text = " <b>Water</b>";
    $("#image").append("<img src='water.png'>");
  } else if (molecule == "co2") {
    var text = " <b>Carbon dioxide</b>";
    $("#image").append("<img src='co2.png'>");
  } else if (molecule == "oxygen") {
    var text = " <b>Oxygen</b>";
    $("#image").append("<img src='oxygen.png'>");
  } else {
    var text = " <b>Deoxyribonucleic acid</b>";
    $("#image").append("<img src='dna.png'>");
  }
  $("#currentview").append(text);
};