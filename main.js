//Get word (input & list)
let search = document.getElementById("input-container");
let list = document.getElementsByTagName("li");

search.onkeyup = () =>{
  for(let i=0; i<list.length; i++){
    let p = list[i].getElementsByTagName("p")[0]
    if ((p.innerHTML.toUpperCase().indexOf(search.value) > -1) || (p.innerHTML.toLowerCase().indexOf(search.value) > -1) ){
      list[i].style.display = "block"
    } else {
      list[i].style.display = "none"
    }
  }
}