var displayComposition = function(molecule) {
  $("#currentview").text("Currently viewing:")
  if (molecule == "salt") {
    var text = " <b>Table salt</b>";
  } else if (molecule == "water") {
    var text = " <b>Water</b>";
  } else if (molecule == "co2") {
    var text = " <b>Carbon dioxide</b>";
  } else if (molecule == "oxygen") {
    var text = " <b>Oxygen</b>";
  } else {
    var text = " <b>Deoxyribonucleic acid</b>";
  }
  $("#currentview").append(text);
}