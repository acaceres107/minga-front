import './button.css'
import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import categoriesActions from '../../store/categories/categories.action';
const {filterCategoryComics}=categoriesActions
function Button({id,name,num}) {
    let dispatch=useDispatch();
    let [click,setClick]=useState(false);
    
    const buttonId =(e)=>{
        e.preventDefault()
        setClick(!click)
        dispatch(filterCategoryComics(id))
    };
    
    return (
        <>
        {
            click?( <button onClick={buttonId} className={`input-active-${num}`} id={id}  >{name}</button> ): (<button onClick={buttonId} className={`input-${num}`} id={id}  >{name}</button>)
        }
        </>
    )
}

export default Button
