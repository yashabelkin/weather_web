import React from 'react'

const SecPage = ({data}) => {
  return (
    <div className='container'>
        <div className='main'>
            
            <p className='city'>
                tel aviv
            </p>
            <div className='desc'>
              {data.desc}
            
            <p className='temperature'>
            {data.temp}
            </p>
            </div>
            <p className='weather-description'></p>
            <p className='feels-like'></p>

        </div>
        </div>
  )
}

export default SecPage