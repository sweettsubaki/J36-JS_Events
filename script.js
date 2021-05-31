//function 1-bis
let myFooter = document.querySelector("footer");
let i = 1;
function footerEffect(){
  console.log(`Click number ${i}.`);
  i++;
}

myFooter.addEventListener("click",footerEffect);


// function 2
const toggler = () => {
    navbarHeader.classList.toggle('collapse');
}
const menu = document.querySelector('button').addEventListener('click', toggler);


// function 3
document.getElementsByClassName("btn-outline-secondary")[0].addEventListener('click', () => {
    document.getElementsByClassName("card-text")[0].style.color = 'red'
});


// function 4
const textCard = document.getElementsByClassName("card-text")[1];
let btnBool = false;
const editButton = document.getElementsByClassName("btn-outline-secondary")[1];

editButton.addEventListener('click', () => {
    if (btnBool) {
        btnBool = false;
        textCard.style.color = '';
    } else {
        btnBool = true;
        textCard.style.color = 'green';
    }
});


// function 5
let navBar = document.getElementsByTagName("header")[0];
let targetLink = document.getElementsByTagName("link")[0];
// so far I understood only a link tag can be disabled
// whereas an href can't apply disabled method
function toggleBootstrap(){
  if (targetLink.disabled === true){
    targetLink.disabled = false;
  } else {
    targetLink.disabled = true;
  }
}

navBar.addEventListener("dblclick",toggleBootstrap);


// function 6
// won't be messed up by card mouvements
// the solution is NOT USING index
// simple collection iteration such as foreach
// or more complicated logics such as, finding the button by index
// and other stuff by parentElement
// make things work
function hideCard(btn){
  var card = btn.target.closest('.card');
  var image = card.getElementsByClassName("card-img-top")[0];
  var text = card.getElementsByClassName("card-text")[0];
  var hover = text.style.visibility == 'hidden'

  if(hover){
    text.style= "";
    image.style = "";
    hover = false;
  } else {
    text.style= "visibility:hidden";
    image.style = "width:20%;";
    hover = true;
  }
}

let buttons = document.getElementsByClassName("btn-success");
for(let i = 0; i < buttons.length; i++){
  var viewBtn = buttons[i];
  //when the function is defined with an argument
  // and followed by false, it works
  viewBtn.addEventListener("mouseover", hideCard, false)
}

//* function 7
// no, didn't manage to fix the lag T_T
let blocks = document.getElementsByClassName("col-md-4");

let switchBtn1 = document.getElementsByClassName("my-2")[1];
let album = document.getElementsByClassName("row")[1];
function switchCards(){
  album.insertBefore(blocks[blocks.length-1], blocks[0]);
}

switchBtn1.addEventListener("click",switchCards);


// function 8
// difference between disabling a link tag
// and disabling the href of an a tag :
// for the former, a simple disabled = true
// for the latter, need to removeAttribute("href")
let switchBtn2 = document.getElementsByClassName("btn-primary")[0];
let externalLink = document.getElementsByTagName("a")[4]
externalLink.removeAttribute("href");
function switchBack(){
  album.insertBefore(blocks[0], blocks[blocks.length]);
}
// note how it is possible to insert before a fictive "last element" that doesn't exist
switchBtn2.addEventListener("click",switchBack);