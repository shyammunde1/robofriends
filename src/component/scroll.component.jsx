import React from 'react'

import './scroll.component.styles.scss'

const Scroll= (props) => {
  return (
    <div className='scrollcontainer'>
      {props.children}
    </div>
  )
}

export default Scroll;
