$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4"]
    var newArray = [];

    groceries.forEach(function(item) {
       var userInput = $("input#" + item).val();
       newArray.push(userInput);
      });

      newArray.sort();
      var newArray1 = newArray[0]
      var newArray2 = newArray[1]
      var newArray3 = newArray[2]
      var newArray4 = newArray[3]

    // newArray.forEach(function(item) {
    //   $("." + groceries).text(item);
    //   });

      $(".item1").append(newArray1);
      $(".item2").append(newArray2);
      $(".item3").append(newArray3);
      $(".item4").append(newArray4);

      console.log(newArray);

      $("#story").show();



  });
});


// $(document).ready(function(){
//   $("#groceries").submit(function(event) {
//     event.preventDefault();
//
//     var groceries = ["item1", "item2", "item3", "item4"]
//
//     // var sortGroceries = [];
//     // groceries.forEach(function(grocery){
//     //   sortGroceries.sort();
//
//     groceries.sort()
//     console.log(groceries)
//     $("#story").text(groceries);
// });
