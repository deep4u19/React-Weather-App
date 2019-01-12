import React, { Component } from 'react'

export class WeatherForm extends Component {

    state={
        city:'',
        country:''
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.getWeather(this.state);
        // console.log('form',this.state);
                
    }
   render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input id='city' onChange={this.handleChange} placeholder='City' type="text"/>
            <input id='country'onChange={this.handleChange} placeholder='Country' type="text"/>
            <button>Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm
