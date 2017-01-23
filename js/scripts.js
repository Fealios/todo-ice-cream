var increment = 0;
var taskArray = [];

function Task(userInput, deadlineInput, notesInput, priorityInput) {
  this.task = userInput;
  this.deadline = deadlineInput;
  this.notes = notesInput;
  this.priority = priorityInput;
  this.increment = increment;

}

Task.prototype.join = function() {
  return "<div id='" + this.increment + "'><input type='checkbox' name='tasklist' value='" + this.increment + "'>" + this.task + "<br>" + this.deadline + "<br>" + this.notes + "<br></div>";
};


Task.prototype.priorityChecker = function() {
  if (this.priority) {
    $("#" + this.increment).addClass("priority");
  } else {

  }
}

$(function(){
  $("#blank").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var deadlineInput = $("#deadline").val();
    var notesInput = $("#notes").val();
    var priorityInput = $("input:radio[name=priority]:checked").val();
    var newTask = new Task (userInput, deadlineInput, notesInput, priorityInput);

    $(".output").append(newTask.join());
    newTask.priorityChecker();

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

  $("#priority").click(function(event){
    event.preventDefault();

    $("input:checkbox[name=tasklist]:checked").each(function() {
      var id = $(this).val();
      $("#" + id).toggleClass('priority');
    });
  });
});
