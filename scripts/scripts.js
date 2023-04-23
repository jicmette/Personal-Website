function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

function messagesent_alert() {
  var name = document.getElementById("name").value;
  alert(
    "Hello " + name + " I will get back to you as soon as possible, thank you!"
  );
}
