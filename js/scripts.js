function Task(userInput, deadlineInput, notesInput) {
  this.task = userInput;
  this.deadline = deadlineInput;
  this.notes = notesInput;

  this.join = function(){
    return this.task + " " + this.deadline + " " + this.notes;
  }
}


$(function(){
  $("#blank").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var deadlineInput = ($("#deadline").val());
    var notesInput = ($("#notes").val());

    var newTask = new Task (userInput, deadlineInput, notesInput);

    $(".output").append(newTask.join());

  });
});
