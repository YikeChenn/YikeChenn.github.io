const hoverBoard = document.getElementById('hoverBoard')
const squareNum = 3956
    
for(let i = 0; i < squareNum; ++i){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    hoverBoard.appendChild(square)
}
    
function randomColor(){
    var color = ""
    for(let i = 0; i < 6; ++i){
        color += (Math.random() * 16 | 0).toString(16)
    }
    return "#" + color
}
    
function setColor(ele){
    const color = randomColor()
    ele.style.background = color
    ele.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
    
function removeColor(ele){
    ele.style.background = '#1d1d1d'
    ele.style.boxShadow = '0 0 2px #000'
}
    


$('#backgroundChange').click(function(){
    if($('link[title=hoverboardCSS]').prop('disabled') == false){
        $('#openSideButton').hover(function(){
            let new_color = randomColor()
            $(this).css({"background-color": new_color})
        }, function(){
            $(this).css({"background-color": "black"})
        })
            
        $('.sideBar').hover(function(){
            let new_color = randomColor()
            $(this).css({
                "background-color": new_color,
                "border": "2px solid white"
            })
        }, function(){
            $(this).css({
                "background-color": "black",
                "border": "none"
            })
        })
    }
    else{ 
        $('.sideBar').hover(function(){
            $(this).css({
                "background-color": "rgb(0, 140, 255)",
            })
        }, function(){
            $(this).css({
                "background-color": "black",
            })
        })
    }
})


// $('#openSideButton').hover(function(){
//     let new_color = randomColor()
//     $(this).css({"background-color": new_color})
// }, function(){
//     $(this).css({"background-color": "black"})
// })
    
// $('.sideBar').hover(function(){
//     let new_color = randomColor()
//     $(this).css({
//         "background-color": new_color,
//         "border": "2px solid white"
//     })
// }, function(){
//     $(this).css({
//         "background-color": "black",
//         "border": "none"
//     })
// })

