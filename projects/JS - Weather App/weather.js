/*jshint esversion: 8 */
class Weather {
  constructor() {
    this.client_id = '95bacfa96c7d56130c8f0461cc6923dc';
    this.city = '';
  }

  async getWeather() {
    const weatherRespone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.client_id}&units=metric`);
    const weather = await weatherRespone.json();

    return {
      weather
    };

  }

  async getLocation() {
    const locationResp = await fetch('https://extreme-ip-lookup.com/json/');
    const location = await locationResp.json();

    return location.region;
  }

  changeLocation(city) {
    this.city = city;
  }
}
