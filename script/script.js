
$('link[title=hoverboardCSS]').prop('disabled',true);
$('link[title=hoverboardJS]').prop('disabled',true);

//starting loading and bluring.
$(document).ready(function(){
    let loading = setInterval(blurring, 30)
    setTimeout(function(){
        $('.loadingSign').fadeToggle(500)
    }, 2000)
})


// let load = 0
// // let loading = setInterval(bluring, 30)
// function blurring(){
//     load++
//     // if(load > 99) clearInterval()
//     document.querySelector('.page').style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }
// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }


$('#hideButton').click(function(){
    $('#hiddenPart').fadeToggle(500)
})


//side bar
function ifOpenSidebar(){
    if(document.getElementById("sideBar").style.width == "20%") {closeSidebar()}
    else {openSidebar()}
}

function openSidebar(){
    $("#sideBar").animate({width: '20%'}, 500)
    $("#sideMenu").animate({left: '20%'}, 500, console.log('finished'))
    $(".mainPart").animate({left: '26%'}, 500)
    $(".hiddenPage").animate({width: '70vw'}, 0)

}

function closeSidebar(){
    $("#sideBar").animate({width: '0'}, 500)
    $("#sideMenu").animate({left: '0'}, 500)
    $(".mainPart").animate({left: '14%'}, 500)
    $(".hiddenPage").animate({width: '75vw'}, 0)

}


// side bar 
$(".sideBar").click(function(){
    $(".frontPage").removeClass("frontPage")
    $(".clicked").removeClass("clicked")
    $(this).addClass("clicked")
    if($(this).attr("id") == "introductionSideBar") $("#introPart").addClass("frontPage")
    else if($(this).attr("id") == "vedioSideBar") $("#vedioPart").addClass("frontPage")
    else if($(this).attr("id") == "settingsSideBar") $("#settingPart").addClass("frontPage")
})


//Background Settings
$(".starBackgroundSelection").click(function(){
    $('link[title=starsCSS]').prop('disabled',false);
    $('link[title=hoverboardCSS]').prop('disabled',true);
    $('link[title=hoverboardJS]').prop('disabled',true);
})
$(".hoverBoardBackgroundSelection").click(function(){
    $('link[title=hoverboardCSS]').prop('disabled',false);
    $('link[title=hoverboardJS]').prop('disabled',false);
    $('link[title=starsCSS]').prop('disabled',true);
})