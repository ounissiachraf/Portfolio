


function showing(event){
    let works= document.querySelectorAll(".workBox");
    let type=$(event.target).attr('class');
    for(i=0;i<works.length;i++)
    {
        works[i].classList.remove('hide');
        works[i].classList.remove('show');
    }
    let cl="workBox "+type;
    //alert(cl);
    for(i=0;i<works.length;i++)
    {
        if($(works[i]).attr('class') == cl)
        {
            works[i].classList.remove('hide');
        }
        
        else
        {
            works[i].classList.add('hide');
        }
        
    }
}

function showingALL(){
    let works= document.querySelectorAll(".workBox");
    for(i=0;i<works.length;i++)
    {
        works[i].classList.remove('hide');
        works[i].classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function(){

    $("ul li button").click(showing);
    $(".ALL").click(showingALL);
});

