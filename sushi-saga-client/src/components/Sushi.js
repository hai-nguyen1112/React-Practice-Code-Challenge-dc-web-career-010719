import React from 'react'

const Sushi = ({sushi}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          sushi.eaten
          ?
          null
          :
          <img src={sushi.img_url} width="100%" alt={sushi.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
