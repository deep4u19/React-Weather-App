import React from 'react'

const Weather = ({ weatherData }) => {    
  return (
    <div className='weather__info'>
        {weatherData.city && weatherData.country && !weatherData.error? 
        <div>
            <p className='weather__key'>
                Location:
                    <span className='weather__value'>
                      {weatherData.city}, {weatherData.country}
                    </span>
            </p>

            <p className='weather__key'>
                Temperature:
                    <span className='weather__value'>
                        {weatherData.temperature}
                    </span>
            </p>

            <p className='weather__key'>
                Humidity:
                <span className='weather__value'>
                    {weatherData.humidity}
                </span>
           </p>
            <p className='weather__key'>
                Description:
                <span className='weather__value'>
                    {weatherData.description}
                </span>
            </p>
        </div>
            :
           <div>
              <p className='weather__key'><span>{weatherData.error}</span></p>
          </div>
          }
    </div>
  )
}

export default Weather
