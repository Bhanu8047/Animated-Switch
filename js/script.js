$(document).ready( () => {

    $('#switch').click( () => {
        let btn = $('.btn')
        if(btn.hasClass('anim-btn-on')){
            btn.removeClass('anim-btn-on').addClass('anim-btn-off')
            $('#switch').css({
                "background-image":"linear-gradient(to bottom right, #e64413, #ff7300)"
            })
        } else {
            btn.removeClass('anim-btn-off').addClass('anim-btn-on')
            $('#switch').css({
                "background-image":"linear-gradient(to bottom right, #0fd850, #0fd850)"
            })
        }
    })
})