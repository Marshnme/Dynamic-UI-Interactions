let navButtons = document.querySelectorAll("a");
let imga = document.querySelectorAll(".slider-img");
let imgs = [...imga]
navButtons.forEach(item => {
    item.addEventListener('click',activeTab)
})

let i = 0
function autoScroll(imgC){
    console.log(imgs.indexOf(imgC))
    i = imgs.indexOf(imgC) + 1
    if(imgs.indexOf(imgC) == 5){
            i = 0
        }
        
        navButtons[i].click()

        

    console.log("da index",i)
    }



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
    
    function rectEle(ele){
        return ele.getBoundingClientRect()
    }
        
    let currtargetrect = e.target.getBoundingClientRect()
    
    
        switch(true){
            case currtargetrect.left < rectEle(imgs[0]).left && currtargetrect.right > rectEle(imgs[0]).right:
                
                navButtons.forEach(item =>{
                    if(item.hash == "#one"){
                    item.classList.add("background");
                    
                    setTimeout(autoScroll,8000,imgs[0])
                        
                }else{
                    item.classList.remove("background")
                }
                
                })
                 
                
            break
            case currtargetrect.left < rectEle(imgs[1]).left && currtargetrect.right > rectEle(imgs[1]).right:
                
                navButtons.forEach(item =>{
                    if(item.hash == "#two"){
                    item.classList.add("background");
                    
                    setTimeout(autoScroll,8000,imgs[1])
                        
                }else{
                    item.classList.remove("background")
                }
                })
                
                
            break
            case currtargetrect.left < rectEle(imgs[2]).left && currtargetrect.right > rectEle(imgs[2]).right:
                
                navButtons.forEach(item =>{
                    if(item.hash == "#three"){
                    item.classList.add("background");
                    
                    setTimeout(autoScroll,8000,imgs[2])
                        
                }else{
                    item.classList.remove("background")
                }
                })
                
                
            break
            case currtargetrect.left < rectEle(imgs[3]).left && currtargetrect.right > rectEle(imgs[3]).right:
                
                navButtons.forEach(item =>{
                    if(item.hash == "#four"){
                    item.classList.add("background");
                    setTimeout(autoScroll,8000,imgs[3])
                    
                }else{
                    item.classList.remove("background")
                }
                })
                
                
            break
            case currtargetrect.left < rectEle(imgs[4]).left && currtargetrect.right > rectEle(imgs[4]).right:
                
                navButtons.forEach(item =>{
                     if(item.hash == "#five"){
                    item.classList.add("background");
                    setTimeout(autoScroll,8000,imgs[4])
                }else{
                    item.classList.remove("background")
                }
                })
                
               
            break
            case currtargetrect.left < rectEle(imgs[5]).left && currtargetrect.right > rectEle(imgs[5]).right:
                
                
                navButtons.forEach(item =>{
                    if(item.hash == "#six"){
                    item.classList.add("background");
                    setTimeout(autoScroll,8000,imgs[5])
                }else{
                    item.classList.remove("background")
                }
                })
                
              
            break  
        }
    
}
