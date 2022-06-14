let services = document.querySelector('.services-hover')
let servicesDropDown = document.querySelector('.services-dropdown')

let dropDown = function(e){
    if(e.currentTarget !== e.target){
        return
    }
    e.target.nextElementSibling.classList.toggle("hidden")
    
}

// let removeDropDownFromParent = function(e){
    
//     if(e.currentTarget !== e.target){
//         return
//     }
//     e.target.nextElementSibling.classList.add("hidden")
// }

let removeDropDown = function(e){
    if(e.target !== e.currentTarget){
        return
    }
    e.target.classList.add("hidden")
}


services.addEventListener('mouseover',dropDown)
// services.addEventListener('mouseover',removeDropDownFromParent)
servicesDropDown.addEventListener('mouseleave',removeDropDown)