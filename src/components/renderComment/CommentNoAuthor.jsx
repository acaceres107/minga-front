import React from 'react'

export default function CommentNoAuthor({text,photo,name,fn}) {
  return (
    <div>
        <div className='user-info'>
          <img src={photo} alt="imagen perfil" />
         <h2>{name[0]}</h2>
        </div>
        <p className='edit-delete'>{text}</p> 
        <div className='reply'>
          <button className='delete-btn' onClick={(e)=>fn(e)}>
             <img src="/assets/comment.png" alt="" />
          </button>
            <button className='edit-btn'>
                <img src="/assets/replybtn.png" alt="" />
            </button>
        </div>
    </div>
  )
}
