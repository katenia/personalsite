//Submit popup when contact submit button pushed
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}



//Changes the homescreen text box to purple when hovered
document.getElementById("purple").addEventListener("mouseover", mouseOver);
document.getElementById("purple").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("purple").style.color = "purple";
}
function mouseOut() {
    document.getElementById("purple").style.color = "gray";
}




//Makes the homescreen picture rotate
document.getElementById("rotate").addEventListener("mouseover", Turn)

function Turn() {
    document.getElementById("rotate").animate([
            { transform: 'translate3D(0, 0, 0)' }, 
            { transform: 'translate3D(0, -300px, 0)' }
          ], {
            duration: 1000,
            iterations: 1
          })
          
          var Tumbling = [
            { transform: 'rotate(0)'}, 
            { transform: 'rotate(30deg)'}
          ];
          
          var Timing = {
            duration: 1000,
            iterations: 1
          }
          
          document.getElementById("rotate").animate(
            Tumbling, 
            Timing
          )
}

