import React from 'react'
import './Card.css'
import { MoreHorizontal } from 'react-feather'
function Card (){
  return (
    <div className='card'>
        <div className='card-top'>
            <div className='card-labels'>
                <MoreHorizontal/>
            </div>
        </div>
    </div>
  )
}

export default Card