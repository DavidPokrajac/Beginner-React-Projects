import React, { Component } from "react";
import "./style.css";
import InputForm from "./InputForm/InputForm";
import WeatherContainer from "./WeatherContainer/WeatherContainer";
import axios from "axios";
import Spinner from "./Spinner/Spinner"

class App extends Component {
  state = {
    city: "Toronto",
    appID: "8545c8d527047c7070ed313cd37d2066",
    temperature: "",
    forecast: "",
    humidity: "",
    icon: "",
    loading: false
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${
          this.state.appID
        }`
      )
      .then(res => this.setState({
        city: this.state.city + ", " + res.data.sys.country,
        temperature: res.data.main.temp,
        forecast: res.data.weather[0].main,
        humidity: res.data.main.humidity,
        icon: res.data.weather[0].icon
      }));
  }

  newAdd = (name) => {
    this.setState({
      city: name,
      loading: true
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          name
        }&units=metric&appid=${this.state.appID}`
      )
      .then(res => this.setState({
        city: this.state.city + ", " + res.data.sys.country,
        temperature: res.data.main.temp,
        forecast: res.data.weather[0].main,
        humidity: res.data.main.humidity,
        icon: res.data.weather[0].icon,
        loading: false
      }))
      .catch(error => {
        this.setState({
          city: "Please enter valid name",
          temperature: "",
          forecast: "",
          humidity: "",
          icon: "",
          loading: false
        });
        console.log(error)
      });
     
  }; 

  render() {
    let yo = <WeatherContainer
          city={this.state.city}
          temp={this.state.temperature}
          forecast={this.state.forecast}
          humidity={this.state.humidity}
          icon={this.state.icon}
        />
    if(this.state.loading){
      yo = <Spinner />
    }
    return (
      <div>
        <h1>Weather App</h1>
        <p>Get weather info about a city!</p>
        <InputForm onSub={this.newAdd} />
        {yo}
      </div>
    );
  }
}

export default App;
