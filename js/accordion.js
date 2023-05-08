const openAcco = (item) =>{
    const teamBlock = item.closest(".team");
    const accoBlock = teamBlock.find(".team__content");
    const accoBlockView = accoBlock.find(".team__content--block").height();
    item.removeClass("team__close").addClass("team__open");
    teamBlock.addClass("active");
    accoBlock.height(accoBlockView);
}

const closeAcco = (item) =>{
    const teamBlock = $(".team");
    const accoBlock = teamBlock.find(".team__content");
    const button = $(".team__title");
    button.removeClass("team__open").addClass("team__close");
    teamBlock.removeClass("active");
    accoBlock.height(0);
}

$(".team__title").click((e) =>{
    const butClick = $(e.currentTarget);
    const teamBlock = butClick.closest(".team");
    if(teamBlock.hasClass("active")){
        closeAcco(butClick);
    }else{
        closeAcco(butClick);
        openAcco(butClick);
    }
})