import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'
function CharacterGrid({items, isLoading}) {
  return isLoading ? (<h1><Spinner/></h1>): (<section className='cards'>
      {items.map(item => (
          <CharacterItem key={item.char_id} item= {item}></CharacterItem>
      ))}
  </section>)
}

export default CharacterGrid