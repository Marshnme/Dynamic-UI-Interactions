let navButtons = document.querySelectorAll("a");

navButtons.forEach(item => {
    item.addEventListener('click',activeTab)
})


function activeTab(e){
        if(e.currentTarget !== e.target){
            return
        }
        navButtons.forEach(item => {
            item.classList.remove("background")
        })
        e.target.classList.add("background")
    
}


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

let imagesContainer = document.querySelector(".images-container")

imagesContainer.addEventListener("scroll",debounce(moveNavButtons))

function moveNavButtons(e){
   let scrollLeftVal = e.currentTarget.scrollLeft
   switch(true){
    case scrollLeftVal >= 0 && scrollLeftVal <= 700:
        console.log("nav1")
        break
    case scrollLeftVal > 700 && scrollLeftVal <= 1500:
        console.log("nav2");
        break
    case scrollLeftVal > 1500 && scrollLeftVal <= 2430:
        console.log("nav3");
        break
    case scrollLeftVal > 2430 && scrollLeftVal <= 3300:
        console.log("nav 4");
        break
    case scrollLeftVal > 3300 && scrollLeftVal <= 3900:
        console.log("nav5")
        break
 
   case scrollLeftVal > 3900:
        console.log("nav 6");
        break  
    }
}