import React from 'react'
import './Board.css'
import Card from'./Card/Card'
import {MoreHorizontal} from 'react-feather'
function Board (){
  return (
    <div className='board'>
        <div className='board-top'>
            <p className='board-top-title'>To-Do <span>2</span></p>
            <MoreHorizontal />
        </div>
        <div className='board_cards'>
            <Card/>
        </div>
    </div>
  )
}

export default Board