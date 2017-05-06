var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-menu");

var form = popup.querySelector("form");
var adultCount = popup.querySelector("#adult-count");
var childCount = popup.querySelector("#child-count");
var storage = localStorage.getItem("adultCount");

link.addEventListener("click", function(event) {
event.preventDefault();
if ( popup.classList.contains("search-menu-show") ) {
  popup.classList.remove("search-menu-show");
}
else {
 popup.classList.add("search-menu-show");
   if (storage) {
     adultCount.value = storage;
     childCount.focus();
   }
   else {
     adultCount.focus();
   }
}
});

form.addEventListener("submit", function(event) {

 if (!adultCount.value || !childCount.value) {
   event.preventDefault();
   console.log("Нужно заполнить поля информации");
 }
 else {
   localStorage.setItem("adultCount", adultCount.value);
 }
});
