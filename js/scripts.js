var increment = 0;
var taskArray = [];

function Task(userInput, deadlineInput, notesInput) {
  this.task = userInput;
  this.deadline = deadlineInput;
  this.notes = notesInput;
  this.increment = increment;
}

Task.prototype.join = function() {
  return "<div id='" + this.increment + "'><input type='checkbox' name='tasklist' value='" + this.increment + "'>" + this.task + "<br>" + this.deadline + "<br>" + this.notes + "<br></div>";
}


$(function(){
  $("#blank").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var deadlineInput = ($("#deadline").val());
    var notesInput = ($("#notes").val());
    var newTask = new Task (userInput, deadlineInput, notesInput);

    $(".output").append(newTask.join());
    increment++;
  });

  $("#delete").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=tasklist]:checked").each(function() {
      var id = $(this).val();
      $(this).hide();
      $('#'+id).hide();
    });
  });

  $("#append").click(function(event){
    event.preventDefault();

    $("input:checkbox[name=tasklist]:checked").each(function() {
      var id = $(this).val();
      $("#" + id).addClass('priority');
    });
  });

});


// for(i=0;i<taskArray.length;i++){
//   function sortNum(date1, date2){
//     return date1-date2;
//   }
//
// taskArray.sort(sortNum(taskArray[i-1], taskArray[i]));
// console.log(taskArray.date);
// }
// }
// if (increment === 0) {
//   $(".output").append(newTask.join());
// } else if (taskArray[increment-1].date > taskArray[increment].date) {
//     $(".output").prepend(newTask.join());
// } else {
//     $(".output").append(newTask.join());
// }
