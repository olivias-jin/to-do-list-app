
$(document).ready(function(){



//add new item
    function newItem(){
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);

    }


//cross out item
    function cross(){
        li.addClass("strike")
    }
        


//Delete item
    let deleteButton = $("<deleteButton></deleteButton>");    
    deleteButton.append("X");
    li.addClass("deleteButton");

//change the order
    $("#list").sortable();

});