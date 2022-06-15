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