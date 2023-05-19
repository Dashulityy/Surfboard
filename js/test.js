const sections = $("section");
const display = $(".wrapper__content");

let inScroll = false;

sections.first().addClass("active");

const performTransition = (sectionEq) => {
    if(inScroll == false){
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const sideMenuTheme = currentSection.attr("data-sideMenu-theme");
        const sideMenu = $(".navigation");

        if(sideMenuTheme == "black"){
            sideMenu.addClass("navigation--black");
        }else{
            sideMenu.removeClass("navigation--black");
        }
  
        display.css({
          transform: `translateY(${position}%)`,
        });
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
        setTimeout(() =>{
            inScroll = false;
            sideMenu.find(".navigation__item").eq(sectionEq).addClass("navigation__item--active").siblings().removeClass("navigation__item--active");
        }, 1300)
    }
};

const scrollViewport = (direction) =>{
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    if (direction == "next" && nextSection.length){
        performTransition(nextSection.index())
    }
    if (direction == "prev" && prevSection.length){
        performTransition(prevSection.index())
    }
};

$(window).on("wheel", (e) => {
  const deltaY = e.originalEvent.deltaY;
  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }
});

$(window).on("keydown", (e)=>{
    const tagName = e.target.tagName.toLowerCase();
    if(tagName != "input" && tagName != "textarea"){
        switch(e.keyCode){
            //prev
            case 38: 
                scrollViewport("prev");
                break;
            //next
            case 38: 
            scrollViewport("next");
                break;
        }
    }
});

$("[data-scroll-to]").click((e) => {
    e.preventDefault();
    const menuItemClicked = $(e.currentTarget);
    const target = menuItemClicked.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    performTransition(reqSection.index());
})
$("body").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction) {
    
      alert(direction); 
    }
  });