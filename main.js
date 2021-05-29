var menu_list =[Veg_Margherita_Pizza,paneer_veg_pizza,non_veg_paneer_pizza
,chicken_pizza , ginger_garlic_pizza
                    ];

function get_menu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0<menu_list_array.length;i++;){
htmldata=htmldata+'<li>'+menu_list_array+[i]+'<li>';
document.getElementById("a").innerHTML=htmldata















}
htmldata=htmldata+"<ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>";
for (var i=0; i<menu_list_array.length;i++){



    htmldata=htmldata+'<div class="card">';
    +'<img src="images/pizzaimg.png"/>';
    +menu_list_array[i]+'</div>';
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerhtml=htmldata;
}



}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item()
}