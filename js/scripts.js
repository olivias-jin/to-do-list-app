
//add new item
    function newItem(){
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);

        if (inputValue === ''){
            alert("You must write something");
        } else {
            $('#list').append(li);
        }
    


//cross out item
    function cross(){
        li.addClass("strike")
    }

    li.on("dblclick", function cross (){
        li.addClass("strike");
    });
        


//Delete item
    let deleteButton = $('<deleteButton></deleteButton>');    

    deleteButton.append(document.createTextNode('X'));
    li.attend(deleteButton);

    deleteButton.on("click",deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }

//change the order
    $("#list").sortable();

}