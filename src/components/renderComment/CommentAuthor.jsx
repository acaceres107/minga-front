import React, { useState } from 'react'

import EditForm from './EditForm';
import './RenderComment.css'
function CommentAuthor({text,photo,name,fn,id,chapter_id}) {
  let [edit,setEdit]=useState(false);


  let editButton=()=>{
    setEdit(!edit)
  };

  return (
    <div>
        <div className='edit-delete'>
            <button className='edit-btn' onClick={editButton}>
                <img src="/assets/editbtn.png" alt="" />
            </button>
          <button className='delete-btn' onClick={(e)=>fn(e)}>
             <img src="/assets/delete.png" alt="" />
          </button>
        </div>
        <div className='user-info'>
          <img src={photo} alt="imagen perfil" />
         <h2>{name[0]}</h2>
        </div>
        <p className='edit-delete'>{text}</p> 
        <div className='reply'>
          <button className='delete-btn'>
             <img src="/assets/comment.png" alt="commentimg" />
          </button>
            <button className='edit-btn' >
                <img src="/assets/replybtn.png" alt="replyimg" />
            </button>
        </div>
        {
          edit?(<EditForm  chapter_id={chapter_id}id={id} />):null
        }
        
    </div>
  )
}

export default CommentAuthor