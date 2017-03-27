$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // var words = ["play1"];
    // var inputItems = words.map(function(word) {
    //     return ($("input#" + word).val());
    //   };
    // function splitString(words, separator){
    //   var wordplay = words.split(separator);

    var sentence = $("#play1").val();
    var sentenceArr = sentence.split(" ");
    var newArr = [];

    sentenceArr.forEach(function(word){
      if (word.length >= 3) {
        newArr.push(word);
      }
    });


    alert(newArr);
  });
});
