import React from 'react'
import { Link } from 'react-router-dom'
import USER from './UserStore'



export default function UserList() {
  return (
    <>    
      <p>Choose a medicine from the list below.</p>
      <ul className='MedList'>
        {USER.map(users =>
          <li key={users.id}>
            <a href={`/users/${users.id}`}>
              {users.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}