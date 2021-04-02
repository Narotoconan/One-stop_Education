import $ from 'jquery'

export default {
    changeBgTitle: content => {
        $(".categoryBg .content").html(content)
    },
    changeBg: content => {
        $(".categoryBg").css({
            "background-image": "url("+content+")"
        })
    },
    typeClassAdd: index => {
        $(".categoryType dd:nth-of-type("+index+")").addClass("typeActive");
    },
    typeClassRemove: index => {
        $(".categoryType dd:nth-of-type("+index+")").removeClass("typeActive");
    },
    curAdd: index => {
        $(".curList dd").removeClass("curItemActive");
        $(".curList dd:nth-of-type("+index+")").addClass("curItemActive");
    },
}
