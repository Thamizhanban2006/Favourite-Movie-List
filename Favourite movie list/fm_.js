
items=[];
var con = document.getElementById("container");
var list = document.getElementById("list");
var inp = document.getElementById("inp");
var rbut = document.getElementById("rbut");
var inp_ = document.getElementById("inp_");

rbut.addEventListener('click',delitem);
var button = document.getElementById("button");
button.addEventListener('click',function add(){
    items.push(inp.value);
    inp.value="";
    showlist();
})
function showlist(){
    list.innerHTML=" ";
    items.forEach(function(n,i){
        list.innerHTML+="<li>" +
      n +
      "<a onclick='delitem(" +
      i +
      ")'>   | &times  </a></li>";

    });
}
function delitem(i){
    items.splice(i,1);
    showlist();
    
}