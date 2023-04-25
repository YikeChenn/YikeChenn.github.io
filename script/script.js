
$('link[title=hoverboardCSS]').prop('disabled',true)


//starting loading and bluring.
$(document).ready(function(){
    let loading = setInterval(blurring, 30)
    setTimeout(function(){
        $('.loadingSign').fadeToggle(500)
    }, 2000)
})
let load = 0
function blurring(){
    load++
    // if(load > 99) clearInterval()
    document.querySelector('.page').style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

//hide button
$('#hideButton').click(function(){
    $('#hiddenPart').fadeToggle(500)
})


//side bar opener
function ifOpenSidebar(){
    if(document.getElementById("sideBar").style.width == "20%") {closeSidebar()}
    else {openSidebar()}
}
//side bar
function openSidebar(){
    $("#sideBar").animate({width: '20%'}, 500)
    $("#sideMenu").animate({left: '20%'}, 500)
    $(".mainPart").animate({left: '26%'}, 500)
    $(".hiddenPage").animate({width: '70vw'}, 0)

}
function closeSidebar(){
    $("#sideBar").animate({width: '0'}, 500)
    $("#sideMenu").animate({left: '0'}, 500)
    $(".mainPart").animate({left: '14%'}, 500)
    $(".hiddenPage").animate({width: '75vw'}, 0)

}
$(".sideBar").click(function(){
    $(".frontPage").removeClass("frontPage")
    $(".clicked").removeClass("clicked")
    $(this).addClass("clicked")
    if($(this).attr("id") == "introductionSideBar") $("#introPart").addClass("frontPage")
    else if($(this).attr("id") == "articleSideBar") $("#articlePart").addClass("frontPage")
    else if($(this).attr("id") == "settingsSideBar") $("#settingPart").addClass("frontPage")
})


//Background Settings
$(".starBackgroundSelection").click(function(){
    new Promise(resolve => {
        $('.loadingSign').fadeToggle(0)
        resolve()
    }).then(val =>{
        new Promise(resolve =>{
            $('link[title=starsCSS]').prop('disabled',false)
            $('link[title=hoverboardCSS]').prop('disabled',true)
            resolve()
        })
    }).then(val =>{
        new Promise(resolve =>{
            $('.loadingSign').fadeToggle(500)
        })
    })

})
$(".hoverBoardBackgroundSelection").click(function(){
    new Promise(resolve => {
        $('.loadingSign').fadeToggle(0)
        resolve()
    }).then(val =>{
        new Promise(resolve =>{
            $('link[title=hoverboardCSS]').prop('disabled',false)
            $('link[title=starsCSS]').prop('disabled',true)
            resolve()
        })
    }).then(val =>{
        new Promise(resolve =>{
            setTimeout(function(){
                $('.loadingSign').fadeToggle(500)
            }, 3000)
        })
    })
})