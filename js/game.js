//identifys tile when clicked
$(".game").children( ).click(function(evt) {
  var currentTile = $(this);
  var game = $(".game").first();
  var moveTile = function(location) {
    //remove class
      currentTile.removeClass();
    //add class
      currentTile.addClass(location).addClass("tile");
  };


  //col0 and row0
  if (currentTile.hasClass("col0") && currentTile.hasClass("row0")) {
    if (game.find(".col0.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");

    }

    if (game.find(".col1.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col0 and row1
  else if (currentTile.hasClass("col0") && currentTile.hasClass("row1")) {
    if (game.find(".col0.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");

    }

    if (game.find(".col0.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col1.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col0 and row2
  else if (currentTile.hasClass("col0") && currentTile.hasClass("row2")) {
    if (game.find(".col0.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");

    }

    if (game.find(".col1.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col1 and row0
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row0")) {
    if (game.find(".col0.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col2.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col1 and row1
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row1")) {
    if (game.find(".col1.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col0.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col2.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col1.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col1 and row2
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row2")) {
    if (game.find(".col1.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col0.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col2.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
      moveTile("col2 row2");
    }

  }

  //col2 and row0
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row0")) {
    if (game.find(".col1.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col2.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col2 and row1
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row1")) {
    if (game.find(".col2.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col1.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col2.row0").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

  //col2 and row2
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row2")) {
    if (game.find(".col2.row1").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

    if (game.find(".col1.row2").length > 0) {
      console.log("can't move");
    }
    else {
      console.log("can move");
    }

  }

});




console.log("Mosaic has loaded!");
