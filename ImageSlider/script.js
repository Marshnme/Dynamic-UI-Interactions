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
    let imgs = document.querySelectorAll(".slider-img");
    
    function rectEle(ele){
        return ele.getBoundingClientRect()
    }
        
    let currtargetrect = e.target.getBoundingClientRect()
   
    navButtons.forEach(item =>{
        switch(true){
            case currtargetrect.left < rectEle(imgs[0]).left && currtargetrect.right > rectEle(imgs[0]).right:
                if(item.hash== "#one"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[1]).left && currtargetrect.right > rectEle(imgs[1]).right:
                if(item.hash== "#two"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[2]).left && currtargetrect.right > rectEle(imgs[2]).right:
                if(item.hash== "#three"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[3]).left && currtargetrect.right > rectEle(imgs[3]).right:
                if(item.hash== "#four"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[4]).left && currtargetrect.right > rectEle(imgs[4]).right:
                if(item.hash== "#five"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[5]).left && currtargetrect.right > rectEle(imgs[5]).right:
                if(item.hash== "#six"){
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break  
        }
    })
}