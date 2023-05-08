const FindBlockByAlias = (alias) =>{
    return $(".review").filter((ndx, item)=>{
        return $(item).attr("data-view") == alias;
    })
}
$(".reviews__item--link").click((e) =>{
    e.preventDefault();
    //текущий элемент
    const reviewIcon = $(e.currentTarget);
    //берем атрибут определяющий номер ссылки
    const dataLink = reviewIcon.attr("data-click");
    //находим блок,который надо показать
    const reviewViewBlock = FindBlockByAlias(dataLink);
    //li в котором кликнутая иконка
    const reviewsItem = reviewIcon.closest(".reviews__item");
    
    reviewsItem.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
    reviewViewBlock.addClass("review--active").siblings().removeClass("review--active");

})