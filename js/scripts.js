

// the filter feature
$(document).ready(function () {
    $('.list').click(function () {
        //get the value from the clicked variable
        const value = $(this).attr('data-filter');
        //filter the items
        if (value == 'all') {
            $('.product').show();
        } else {
            $('.product').not('.' + value).hide();
            $('.product').filter('.' + value).show();
        }
    })
    //adding active in the class
    $('.list').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    })
})