//empty tile class and Location
var emptyTile = "tile8";


//all allowed to enter into empty - THIS IS A THOUGHT :)
var rules = [
  "col0row0",
  "col0row1",
  "col0row2",
  "col1row0",
  "col1row1",
  "col1row2",
  "col2row0",
  "col2row1",
  "col2row2"
];



//identifys tile when clicked
$(".game").children().click(function() {

  //current tile class and Location
  var currentTile = $(this).attr("class");
  var currentLoca = $(this).attr("id");
  var emptyTileLoca = $(".tile8").attr("id");

  //console.log Location and Tile clicked
  console.log(currentTile + " is at " + currentLoca);

  //need to replace the locations and tiles with event
  $("#" + currentLoca).removeClass(currentTile).addClass(emptyTile);
  $("#" + emptyTileLoca).removeClass(emptyTile).addClass(currentTile);

  //reload emptyTile location
  emptyTileLoca = $(".tile8").attr("id");

  console.log("The empty tile is currently at " + emptyTileLoca);

});




console.log("Mosaic has loaded!");


//SET IDS ON LOAD -- http://api.jquery.com/attr/
