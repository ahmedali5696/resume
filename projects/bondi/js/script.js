$('.work-category li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
  if ($(this).data('class') === '.all') {
    $('.box').css('display', 'block');
  } else {
    $('.box').css('display', 'none');
    $($(this).data('class')).css('display', 'block');
  }
})

$('.navbar-nav li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
})


document.addEventListener('scroll', () => {
  document.querySelectorAll('.nav-item a').forEach(link => {
    const currLink = link,
      href = currLink.getAttribute('href');

    document.querySelectorAll('section').forEach(section => {
      const sectionOffset = section.offsetTop,
        items = document.querySelectorAll('.nav-item');

      if (window.screenY > sectionOffset - 2 && href.includes(section.id)) {
        items.forEach(item => {
          if (item.classList.contains('active'))
            item.classList.remove('active');
        });

        currLink.parentElement.classList.add('active');
      }

    })

  })
})


