/*jshint esversion: 6 */
document.getElementById('main').setAttribute('href', window.location.origin);

const offset = document.getElementById('nav').offsetTop,
    btn = document.getElementById('collapse');

document.addEventListener('scroll', () => {
    if (window.scrollY > offset) {
        document.getElementById('nav').className = 'fixed';
    } else {
        document.getElementById('nav').classList.remove('fixed');
    }
});

// Scrolling Listener
document.addEventListener('scroll', () => {

    // loop on all nav links to get his atrr
    document.querySelectorAll('#nav li a').forEach(link => {

        // store current element to use it to compare sections ids
        const currLink = link,
            hrefElement = currLink.getAttribute('href');

        // Loop on all sections to get his offsetTop and compare it with currunt link id
        document.querySelectorAll('body section').forEach(section => {
            // store section offsetTop
            const sectionOffset = section.offsetTop,
                // Store all li at nav to loop on it
                items = document.querySelectorAll('.item');

            // condition to add active class to right link
            if (window.scrollY > sectionOffset - 2 && hrefElement.includes(section.id)) {
                // loop on li to remove any active class before add the new
                items.forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
                // add acive class to section link in nav
                currLink.parentElement.classList.add('active');
            }
        });
    });
});

btn.addEventListener('click', () => {
    const list = document.getElementById('list');

    if (list.classList.contains('collapsed')) {
        list.classList.remove('collapsed');
    } else  {
        list.classList.add('collapsed');
    }
})