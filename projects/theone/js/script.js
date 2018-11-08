$('.protofillo a').click(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.protofillo .content > ul').hide();
    $('.' + $(this).data('class')).show();
});
