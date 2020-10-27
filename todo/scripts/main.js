var add_btn = document.getElementsByClassName("add");
var todo_list = document.getElementsByClassName('todo')[0];
var complete_list = document.getElementsByClassName("finished")[0];
var content = "Some content";

function create_list_item() {
    // Get item information to add
    content = document.getElementById("add_item").value;
    document.getElementById("add_item").value = "";

    // Create elements to append to the document 
    var li = document.createElement("li");
    var li_ch = document.createElement("input");
    var li_btn = document.createElement("button");
    var li_btn_img = document.createElement("img");

    // Set attributes for the elements
    li_ch.setAttribute("class", "item");
    li_ch.setAttribute("type", "text");
    li_ch.setAttribute("readonly", "true");
    li_ch.setAttribute("value", content);
    li_btn_img.setAttribute("src", "images/check.svg");

    // Append to the document
    todo_list.appendChild(li);
    li.appendChild(li_btn);
    li_btn.appendChild(li_btn_img);
    li.appendChild(li_ch);

    li_btn.onclick = function(){complete_item(todo_list, li);};
}

function complete_item(item, contents) {
    item.removeChild(contents);
    contents.children[0].children[0].setAttribute("src", "images/delete.svg");
    complete_list.appendChild(contents);
    var x = contents.parentElement;
    contents.children[0].onclick = function(){x.removeChild(contents);};
}

add_btn[0].onclick = function(){create_list_item();};