import React from 'react'

import './search.component.styles.scss'

const Search = (props) => {
  return (
    <div className='searchcontainer'>
      <input type="search" placeholder='search robofreinds' onChange={props.onSearchChanges} />
    </div>
  )
}

export default Search;
