$(".form").submit((e) =>{
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']").val();
    const tel = form.find("[name='tel']").val();
    const comment = form.find("[name='comment']").val();
    const to = form.find("[name='to']").val();

    const modal = $(".modal");
    const modalMess = modal.find(".modal__message");

    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
            name: name,
            phone: tel,
            comment: comment,
            to: to
        },
        success: (data) =>{
            //console.log(data.message);
            $.fancybox.open({
                src: '#modal',
                type: 'inline'
            });
        },
        error: (data) => {
            modalMess.text('Сообщение не было отправлено! Повторите попытку позже');
            $.fancybox.open({
                src: '#modal',
                type: 'inline'
            });
        }
    });

});
$(".js-button-close").click((e)=>{
    e.preventDefault();
    $.fancybox.close();
})