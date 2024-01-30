function moveButton(){
    var button = event.target;
    var buttonReact = button.getBoundingClientRect();

    var maxX = window.innerWidth - buttonReact.width;
    var maxY = window.innerHeight - buttonReact.height;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function some(){
    const date1 = new Date("03/18/2021");
    const today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const date2 = new Date(`${mm}/${dd}/${yyyy}`);

    let diffTime = date2.getTime() - date1.getTime();
    let diffDays = Math.round(diffTime / (1000 * 3600 *24));

    document.getElementById("cantidad").innerHTML = "Te amo: " + diffDays + " mi amorcito bello";

    
}

document.addEventListener("DOMContentLoaded",function(){
    /* Modal*/

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("yesButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        some();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
