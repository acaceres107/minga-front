import React,{ useEffect } from 'react';
import './ListComment.css'
import Coments from '../comments/Coments';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import actionComment from '../../store/comments/comments.action';
import RenderComment from '../renderComment/RenderComment'
import Nav from '../../layouts/nav/NavVar'
import { useState } from 'react';
const {getComments}=actionComment

function ListComment() {

  let commentStore=useSelector((store)=>store.comments);
  const [reload,setReload]=useState(false)
  const [reloadDelete,serReloadDelete]=useState(false)
  let dispatch=useDispatch()
  const { id } = useParams() 
  const [page,setPage]=useState(1)
  let chapter_id=id.slice(3,id.length-1+1)

  useEffect(()=>{
    
    dispatch(getComments({
      chapter_id:chapter_id,
      page:page
    }))
  },[dispatch,page,chapter_id,reload,reloadDelete]);

  const next= ()=>{
    setPage(page+1)
  };
  const prev= ()=>{
    setPage(page-1)
  };

  return (

    <div className='container-listComments'>
        <Nav></Nav>
        
        <div className='container-cardss'>
          {
            commentStore.comment?.map(((e,index)=><RenderComment chapter_id={chapter_id} reload={reloadDelete} set={serReloadDelete} idComment={e?._id} key={index} photo={e?.user_id?.photo} mail={e?.user_id?.mail} text={e?.text}></RenderComment>))
          }
        </div>

        <div className='pages-btn'>
              {
                page===1?null:(<button  className='btn-pages' onClick={prev}>Prev</button>)
              }
              {
                commentStore.comment?.length<5?null:( <button onClick={next}>Next</button>)
              }
        </div>

        <div className='post-comment'>
          <Coments chapter_id={chapter_id}  reload={reload} set={setReload}></Coments>
        </div>

    </div>
    
  )
}

export default ListComment