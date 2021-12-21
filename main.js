let xhr = new XMLHttpRequest();
let outer = document.querySelector('#list');
let obj ;
let btn = document.querySelector('.btn');
function cyklePrint(object, outerTag) {
  for(value in object){
    outerTag.innerHTML += `<li class="list_item">${value} : ${object[value]}</li>`
    console.log(value , object[value])
  }
}
btn.onclick = function() {
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
      obj = JSON.parse(xhr.responseText)
      cyklePrint(obj, outer)
    }
  }
  xhr.open('GET', 'https://swapi.dev/api/people/1/');
  xhr.send();
}
