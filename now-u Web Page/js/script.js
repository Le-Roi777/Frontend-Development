document.addEventListener('DOMContentLoaded', function () {

  let rellax = new Rellax('.rellax', { center: true, horizontal: true, vertical: true });

  let header = document.getElementById("navigation");
  let btns = header.getElementsByClassName("btn");

  for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {

      let current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
});

// NAVIGATION RESPONSIVE
function myFunction() {

  let x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";
  } else {

    x.className = "topnav";
  }
}
  // NAVIGATION RESPONSIVE

