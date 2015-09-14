$(document).ready(function() {
  $("#add-task").click(function(){
    $("#new-tasks").append( '<div class="new-task">'+
                              '<div class="form-group">' +
                                '<label for="task-name">Task</label>' +
                                '<input type="text" class="form-control task-name">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="task-description">Description</label>' +
                                '<input type="text" class="form-control task-description">' +
                              '</div>' +
                            '</div>' );
  });


  $("form#list").submit(function(event) {
   event.preventDefault();

   var title = $("input#list-title").val();
   var newList = { title: title, tasks: [] };

     $(".new-task").each(function() {
       var task = $(this).find("input.task-name").val();
       var description = $(this).find("input.task-description").val();

       var newTask = { name: title, description: description };
       newList.tasks.push(newTask);
     });

 });
});
