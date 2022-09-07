
const toggleBtn = document.getElementById('navbar__toggler');
const navbarList = document.querySelector('.navbar__nav');
const navItem = document.querySelectorAll('.nav-item');
const darkModeBtn = document.querySelector('#dark-mode-btn');


// Navbar Toggler
toggleBtn.addEventListener('click', () => {
  const list = document.querySelector('.navbar__nav');
  list.classList.toggle('collapsed');
})


// Add active class to navbar's item
navbarList.addEventListener('click', (e) => {
  navItem.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  })
  e.target.parentElement.classList.add('active')
})


darkModeBtn.addEventListener('click', () => {
  bodyStyle = document.body.style;
  changeToggler = darkModeBtn.querySelectorAll('i')[1];

  darkModeBtn.classList.toggle('dark');

  if (darkModeBtn.classList.contains('dark')) {

    changeToggler.classList.replace('fa-toggle-off', 'fa-toggle-on');

    bodyStyle.setProperty('--white', '#1c1c1c');
    bodyStyle.setProperty('--text-color', '#c7c7c7');
    bodyStyle.setProperty('--headings-color', '#fff');
    bodyStyle.setProperty('--items-bg-color', '#141414');

  } else if (!darkModeBtn.classList.contains('dark')) {

    changeToggler.classList.replace('fa-toggle-on', 'fa-toggle-off');

    bodyStyle.setProperty('--white', '#fff');
    bodyStyle.setProperty('--text-color', '#777');
    bodyStyle.setProperty('--headings-color', '#444');
    bodyStyle.setProperty('--items-bg-color', '#fff');
  }

})
// Change navbar active class by scrolling
// document.addEventListener('scroll', () => {

//   // loop on all nav links to get his atrr
//   document.querySelectorAll('#nav li a').forEach(link => {

//       // store current element to use it to compare sections ids
//       const currLink = link,
//           hrefElement = currLink.getAttribute('href');

//       // Loop on all sections to get his offsetTop and compare it with currunt link id
//       document.querySelectorAll('body section').forEach(section => {
//           // store section offsetTop
//           const sectionOffset = section.offsetTop,
//               // Store all li at nav to loop on it
//               items = document.querySelectorAll('.nav-item');

//           // condition to add active class to right link
//           if (window.scrollY >= sectionOffset - 2 && hrefElement.includes(section.id)) {

//               // loop on li to remove any active class before add the new
//               items.forEach(item => {
//                   if (item.classList.contains('active')) {
//                       item.classList.remove('active');
//                   }
//               });

//               // add acive class to section link in nav
//               currLink.parentElement.classList.add('active');
//           }
//       });
//   });
// });























