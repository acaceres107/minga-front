import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentAuthor from './CommentAuthor';
import CommentNoAuthor from './CommentNoAuthor';
import alertActions from '../../store/alerts/actions';
import actionDelete from '../../store/comments/delete.comments.action';
import './RenderComment.css';

function RenderComment({text,photo,mail,idComment,reload,set,chapter_id}) {
  let deleteStore=useSelector((store)=> store.deleteComments )
  console.log(deleteStore.response)
  let {deleteComment}=actionDelete;
  let {mingaAlert}=alertActions
  let nameUser=mail.split("@");
  let userStore=useSelector((store)=>store.auth.mail);
  let userMail=mail
  let dispatch=useDispatch()
  let button=async (e)=>{
    e.preventDefault()
    await dispatch(deleteComment(idComment))
        .then(dispatch(mingaAlert(deleteStore.response)))
        .catch(dispatch(mingaAlert(deleteStore.response)))
    set(!reload)
  }

  

 

  return (
    <div className='commentcard-conteiner'>
      {
        userStore===userMail?(<CommentAuthor chapter_id={chapter_id} id={idComment}  name={nameUser} fn={button}   photo={photo} text={text}></CommentAuthor>):<CommentNoAuthor  name={nameUser} photo={photo} text={text}></CommentNoAuthor>
      }
        
    </div>
    
  )
}

export default RenderComment