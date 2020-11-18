/*jshint esversion: 6 */
const weather = new Weather();
const ui = new UI();
const btn = document.getElementById('change');
const modal = document.getElementById('location-modal');

document.addEventListener('DOMContentLoaded', () => {
  weather.getLocation().then(data => {
    weather.changeLocation(data);
    weather.getWeather()
    .then(data => {
      ui.showData(data.weather);
    });
  });
});

btn.addEventListener('click', (e) => {
  if (document.getElementById('city-input').value !== '') {
    const locationInput = document.getElementById('city-input').value;
    weather.changeLocation(locationInput);
    $('#location-modal').modal('hide');
    weather.getWeather().then(data => {
      ui.showData(data.weather);
    })
    .catch(err => console.log(err));
  } else {
    document.getElementById('msg').textContent = 'Please put your location';
  }
});