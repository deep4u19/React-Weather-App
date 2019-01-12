import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm'
import Weather from './components/Weather'
import Title from './components/Title'

class App extends Component {

  state={
    temperature:null,
    city:null,
    country:null,
    humidity:null,
    description:null,
    error:null
  }
  API_KEY ='b7ec28da524b78c077558b3c851120f3';
  getWeather=async(data)=>{
    const {city,country}=data;
    if(city&&country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.API_KEY}&units=metric`);
      const report = await api_call.json();
      console.log(report);
      this.setState({
        temperature: report.main.temp,
        city: city.charAt(0).toUpperCase()+city.slice(1),
        country: country.charAt(0).toUpperCase() + country.slice(1),
        humidity: report.main.humidity,
        description: report.weather[0].description.charAt(0).toUpperCase() + report.weather[0].description.slice(1),
        error: ''
      });
    }else{
      let error='Please enter proper values';
      this.setState({error:error});
      console.log(this.state);
      
    }

    
    
    
    
        

  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                  <WeatherForm getWeather={this.getWeather} />
                  <Weather weatherData={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

