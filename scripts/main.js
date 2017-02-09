$(function (){
    $('.add-class').on('click', function() {
        $(this).addClass('btn-big');
    });

    $('.remove-class').on('click', function() {
        $(this).removeClass('btn-big');
    });

    $('.toggle-class').on('click', function() {
        $(this).toggleClass('btn-orange');
    });

    $('.get-attr').on('click', function() {
        console.log($(this).attr('class'));
    });

    $('.set-attr').on('click', function() {
        console.log($(this).attr('name', 'button'));
    });

    $('.alert-on-click').click( function() {
        alert('clicked');
    });

    $('.trigger-alert').on('click', function() {
        $('.alert-on-click').trigger('click');
    });

    $('.clone-this').on('click', function() {
        $(this).clone().text('cloned').appendTo('.clone-this-wrap');
    });

    $('.closest-element').on('click', function() {
        console.log($(this).parent(this));
    });

    $('.each-btn-text').on('click', function() {
        console.log.each('text');
    });

    $('.find-me').on('click', function() {
        console.log($('body').find(this));
    });

    $('.fade-in-text').on('click', function() {
        $('.fade-in-text-wrap p').fadeIn();
    });

    $('.fade-out-text').on('click', function() {
        $('.fade-out-text-wrap p').fadeOut();
    });

    $('.hide-text').on('click', function() {
        $('.hide-text-wrap p').hide();
    });

    $('.show-text').on('click', function() {
        $('.show-text-wrap p').show();
    });

    $('.data-about-me').on('click', function() {
        console.log.each($(this).attr('class', 'type'));
    });
});