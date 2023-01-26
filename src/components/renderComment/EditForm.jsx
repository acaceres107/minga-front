import React from 'react'
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import actionEdit from '../../store/comments/edit.comment.action'
import actionComment from '../../store/comments/comments.action';
import './RenderComment.css'
function EditForm({id,chapter_id}) {
  let {getComments}=actionComment;
  let {editComment}=actionEdit;
  let dispatch=useDispatch()
  let title=useRef()
  let edit=async (e)=>{
    e.preventDefault()
    let comment={}
    if(title.current.value){
      comment.text=title.current.value
    }
    await dispatch(editComment({
      id:id,
      comment:comment
    }))
    await dispatch(getComments({
      chapter_id:chapter_id,
    }))
  }

  return (
    <div>
        <form action="" className="form-edit" onSubmit={(e)=>edit(e)} >
        <input type="text" placeholder="Edit title" className='input-edit' ref={title}  />
        <input type="submit" value="Send" className="button-form"/>
      </form>
    </div>
  )
}

export default EditForm