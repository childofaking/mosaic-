//empty tile variable and Location
var emptyTile = $(".tile8");
var emptyTileLoca = emptyTile.attr("id");

//all allowed to enter into empty
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
  var currentLocation = $(this).attr("id");
  var currentTile = $(this).attr("class");
  console.log(currentTile + " is at " + currentLocation);
});



console.log("The empty tile is currently at " + emptyTileLoca);
console.log("Mosaic has loaded!");


//SET IDS ON LOAD -- http://api.jquery.com/attr/
