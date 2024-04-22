$(() => {
    $('.menu').on('click', getMenuOptions);
    $('.heart').on('click', changeIconColor);
    $('.user-toggle').on('click', loadLoginPage);
    $('#login-form').on('submit', login)
    $('.map-options-toggle').on('click', getMapOptions);


});

// helper functions
const getMenuOptions = () => {
    if ($('.menu-items').is(':visible')) {
        $('.menu-items').slideUp();
    } else {
        $('.menu-items').slideDown();
    }
};

function changeIconColor() {
    // Check if the icon already has the 'clicked' class
    if ($(this).hasClass('clicked')) {
        // If it does, remove the 'clicked' class to revert to the previous color
        // Send POST request to remove the map from favourite maps
        $(this).removeClass('clicked');
    } else {
        // If it doesn't, add the 'clicked' class to change the color to red
        // Send POST request to add the map to favourite maps
        $(this).addClass('clicked');
    }
}

const loadLoginPage = () => {
    // Add if condition to check if user is logged in
    // If logged in, load menu-options instead
    $('.container').load('login-page.html');
};

function login(event) {
    // Prevents default from submission
    event.preventDefault();

    // Serialize form data
    const formData = $(this).serialize();

    //Make AJAX POST request
    $.post({ url: '/login', data: formData })
        .then((response) => {
            // add necessary data after server side login is created
        })
}

function getMapOptions() {
    if ($('.map-options').is(':visible')) {
        $('.map-options').slideUp();
    } else {
        $('.map-options').slideDown();
    }
}