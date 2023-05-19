const mesureWidth = (item) =>{
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const screenWidth = $(window).width();
    const productItems = item.closest(".product-menu__items");
    const product = productItems.find(".product");
    const productBlock = product.find(".product__content");
    const productWidth = product.width() * product.length;
    if (isMobile){
        if(product.hasClass("product--first")){
            //productBlock.css({'margin-right': - product.width()*2});
            return screenWidth - product.width();
        }else if(product.hasClass("product--second")){
            //productBlock.css({'margin-right': - product.width()*2});
            return screenWidth - product.width()*2;
        }
        return screenWidth - productWidth;
    }else{
        return 524
    }
}
const openHorAcco = (item) =>{
    const productBlock = item.closest(".product");
    const accoBlock = productBlock.find(".product__content");
    const needWidth = mesureWidth(item);
    productBlock.addClass("active");
    accoBlock.width(needWidth);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile){
        if(productBlock.hasClass("product--first")){
            accoBlock.css({'margin-right': - productBlock.width()*2});
        }else if(productBlock.hasClass("product--second")){
            accoBlock.css({'margin-right': - productBlock.width()});
        }
    }
}

const closeHorAcco = () =>{
    const productBlock = $(".product");
    const accoBlock = productBlock.find(".product__content");
    productBlock.removeClass("active");
    accoBlock.width(0);
    accoBlock.css({'margin-right': 0});
}

$(".product__title").click((e) =>{
    e.preventDefault();
    const butClick = $(e.currentTarget);
    const productBlock = butClick.closest(".product");
    if(productBlock.hasClass("active")){
        closeHorAcco();
    }else{
        closeHorAcco();
        openHorAcco(butClick);
    }
})