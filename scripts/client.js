$(() => {
    $('.menu').on('click', () => {
        if ($('.menu-items').is(':visible')) {
            $('.menu-items').slideUp();
        } else {
            $('.menu-items').slideDown();
        }
    });
});