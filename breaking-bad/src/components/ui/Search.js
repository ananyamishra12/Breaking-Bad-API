//import { useState } from "react"
import React, {useState} from 'react'

function Search({getQuery}){
    const [text, setText]= useState('')
    const onChangeFunction = (q) =>{
        setText(q)
        getQuery(q)
    }
  return (
    <div className='search'>
        <form>
            <input type='text' 
            className='form-control' 
            value={text}
            placeholder='Search characters'
            onChange={(event) => onChangeFunction(event.target.value)}/>
            
        </form>
    </div>
  )
}

export default Search
