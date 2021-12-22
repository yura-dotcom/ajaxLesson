let xhr = new XMLHttpRequest();
let outer = document.querySelector('#list');
let obj ;
let i = 1;
let btn = document.querySelector('.btn');
let btnClear = document.querySelector('.btnClear');
function cyklePrint(object, outerTag) {
  for(value in object){
      outerTag.innerHTML += `<li class="list_item">${value} : ${object[value]}</li> `
  }
  outerTag.innerHTML += `<br> `
}
btn.onclick = function() {
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status !== 404) {
      obj = JSON.parse(xhr.responseText)
      cyklePrint(obj, outer)
    }else if(xhr.readyState === 4 && xhr.status == 404){
      i=1
      outer.innerHTML += `<li class="list_item">all heroes are printed</li> <br> `
    }
  }
  xhr.open('GET', `https://swapi.dev/api/people/${i}/`);
  xhr.send();
  i++;
}
btnClear.onclick = function(){
  outer.innerHTML = '';
  i= 1
}
// if(typeof object[value] === 'object' && object[value].length != 0){
  // let newObj = object[value]
  // for(key in newObj){
  
  //   console.log(typeof newObj[key])
  //   console.log(newObj[key])
  //   outerTag.innerHTML += `<li class="list_item">${value}  : ${newObj[key]}</li> `
  // }
// }
// kd;aslkd;aksd;l
    
