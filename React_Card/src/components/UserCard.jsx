import React from 'react'
import './UserCard.css'
import thumb1 from '../assets/images/thumb1.png'

function UserCard() {
  return (
    <div className='user_container'>
        <img id='user_img' src={thumb1} alt='user_avatar' ></img>
        <h2 id='user_name'>John Doe</h2>
        <p id='user_data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus, aliquid dignissimos obcaecati unde repellendus hic illum ipsum ex atque doloribus maiores earum nihil commodi ullam veritatis est ipsam tempore?</p>
    </div>
  )
}

export default UserCard