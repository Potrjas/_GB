$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && $(this).width() > 799) {
            $('header').css({
                'backgroundColor': 'rgba(0, 0, 0, 0.9)',
                'color': '#fff'
            });
            $('#logo').css('left', '0');
            $('header div.fa').css({
                'color': '#fff'
            });
            $('header div.fa img').css({
                'filter': 'invert(1)',
                '-webkit-filter': 'invert(1)'
            });
        }
        else if ($(this).scrollTop() <= 100 && $(this).width() > 799) {
            $('header').css({
                'backgroundColor': '',
                'color': ''
            });
            $('#logo').css('left', '');
            $('header div.fa').css({
                'color': ''
            });
            $('header div.fa img').css({
                'filter': '',
                '-webkit-filter': ''
            });
        }
    });
    $('#nav').click(function() {
        if ($('nav').is(':hidden')) {
            $('nav, header div.fa').slideDown(300);
            $(this).html('&#xf00d;');
        }
        else {
            $('nav, header div.fa').slideUp(300);
            $(this).html('&#xf0c9;');
        }
    });
    var lastId,
    topMenu = $('nav'),
    topMenuHeight = topMenu.outerHeight() + 200,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item;}
    });
    topMenu.on('click', 'a', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 100;
        if ($(window).width() < 800) {
            topMenu.slideUp(300);
            $('header div.fa').slideUp(300);
            $('#nav').html('&#xf0c9;');
        }
        $('body, html').animate({scrollTop: top + 32}, 500);
    });
    if ($(window).width() < 800) {
        $('#logo, header .fa a').click(function() {
            topMenu.slideUp(300);
            $('header div.fa').slideUp(300);
            $('#nav').html('&#xf0c9;');
        });
    }

    $(window).scroll(function() {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function() {if ($(this).offset().top < fromTop) return this;});
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            $('nav a').removeClass("act");
            menuItems.filter("[href=#"+id+"]").addClass("act");
        }
    });
    $('#logo, #logoMob').click(function() {
        $('body, html').animate({scrollTop:0}, 500);
    });
    $('.plate').click(function() {
        if($(this).children('.popup').is(':hidden')) {
            $(this).children('.popup').slideDown(200);
        } 
    });
    $('.popup a').click(function() {
        $(this).parent('.popup').slideUp(200);
    });
    mdate = new Date();
    if($('#date').html() != mdate.getFullYear()) {
        $('#date').append(' - ' + mdate.getFullYear());
    }
});