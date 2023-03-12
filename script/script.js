

//starting bluring
// const page = document.querySelector('.page')
// let load = 0
// let load_interval = setInterval(bluring, 30)

// function bluring(){
//     load++
//     if(load > 99) clearInterval(load_interval)
//     page.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }

function ifOpenSidebar(){
    if(document.getElementById("sideBar").style.width == "250px") {closeSidebar()}
    else {openSidebar()}
}

function openSidebar(){
    $("#sideBar").animate({width: '250px'}, 500)
    $("#openSideButton").animate({left: '250px'}, 500)
    $(".mainPart").animate({padding: '100px 0px 100px 300px'}, 500)

}

function closeSidebar(){
    $("#sideBar").animate({width: '0px'}, 500)
    $("#openSideButton").animate({left: '0px'}, 500)
    $(".mainPart").animate({padding: '100px 0px 100px 100px'}, 500)
}

// //sidebar 
// const unclicked = document.querySelectorAll('li')

// unclicked.forEach(unclickedElement => {
//     unclickedElement.addEventListener('click', () => {
//         document.querySelector('li.clicked').classList.remove('clicked');
//         unclickedElement.classList.add('clicked')
//     })
// })