//starting bluring
const page = document.querySelector('.page')
let load = 0;
let load_interval = setInterval(bluring, 30)

function bluring(){
    load++
    if(load > 99) clearInterval(load_interval)
    page.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}




const unselected = document.querySelectorAll('.unselected');

unselected.forEach(unselected => {
    unselected.addEventListener('mouseover', () => {
        unselected.classList.add('selected')
    })
})

unselected.forEach(unselected => {
    unselected.addEventListener('mouseout', () => {
        unselected.classList.remove('selected')
    })
})