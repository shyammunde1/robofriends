import React from 'react'

import './card.component.styles.scss'

const Card= ({robotItem}) => {
   const {id,name,email} =robotItem
    
  return (
    <div className='cardcontainer'>
      <img src={`https://robohash.org/${id}`} alt={`robots ${name}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
