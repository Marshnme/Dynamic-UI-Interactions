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
    // timeout interval make certain image lineup with 
    // currtargetrect.x
    console.log(currtargetrect.x,imgs[1].x)
    navButtons.forEach(item =>{
        
        switch(true){
            case currtargetrect.left < rectEle(imgs[0]).left && currtargetrect.right > rectEle(imgs[0]).right:
                if(item.hash == "#one"){
                    item.classList.add("background")
                    // setInterval(function(){
                    //     e.target.scrollLeft = rectEle(imgs[1]).left
                    // },6000)
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[1]).left && currtargetrect.right > rectEle(imgs[1]).right:
               
                if(item.hash == "#two"){
                    // setInterval(function(){
                    //     e.target.scrollLeft = rectEle(imgs[2]).left
                    // },6000)
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[2]).left && currtargetrect.right > rectEle(imgs[2]).right:
                // setInterval(function(){
                //     e.target.scrollLeft = rectEle(imgs[3]).left
                // },6000)
                if(item.hash == "#three"){
                    
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[3]).left && currtargetrect.right > rectEle(imgs[3]).right:
                // setInterval(function(){
                //     e.target.scrollLeft = rectEle(imgs[4]).left
                // },6000)
                if(item.hash == "#four"){
                    
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[4]).left && currtargetrect.right > rectEle(imgs[4]).right:
                // setInterval(function(){
                //     e.target.scrollLeft = rectEle(imgs[5]).left
                // },6000)
                if(item.hash == "#five"){
                    
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break
            case currtargetrect.left < rectEle(imgs[5]).left && currtargetrect.right > rectEle(imgs[5]).right:
                // setInterval(function(){
                //     e.target.scrollLeft = rectEle(imgs[0]).left
                // },6000)
                if(item.hash == "#six"){
                    
                    item.classList.add("background")
                }else{
                    item.classList.remove("background")
                }
            break  
        }
    })
}