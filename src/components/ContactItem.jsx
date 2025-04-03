import React from 'react'

function ContactItem({data:{id,name,family,email,phone},deleteHandler}) {
  return (
    <div>
      <li key={id}>
          <p>{name} {family}</p>
          <p>
            <span>📩</span> {email}
          </p>
          <p>
            <span>📞</span> {phone}
          </p>
          <button onClick={()=>deleteHandler(id)}>📁</button>
         </li>
    </div>
  )
}

export default ContactItem
