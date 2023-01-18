import React, { useRef} from "react";
import "./Newchapters.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import alertActions from '../../store/alerts/actions.js'


function Newchapter ( ) {
    const { mingaAlert } = alertActions 
    const dispatch = useDispatch()
    const inputTitle = useRef("")
    const inputPages = useRef("")
    const inputOrder = useRef("")
    
    const save = (e)=>{
        e.preventDefault()
        let data = {
            comic_id: "63acd1e28e7c0313cba77725",
            title: inputTitle?.current?.value,
            pages:inputPages?.current?.value.split(',').map(element => element.trim()),
            order: inputOrder?.current?.value
        }
        axios.post("http://localhost:8000/api/chapters", data)
        .then(res => dispatch(mingaAlert("Done")))
        .catch(err => 
            dispatch(mingaAlert(err.response.data.response)))

    }

    return (

<div className='container1'>
            <form className='formA' onSubmit={save}>
                <div className="form2">
                    <h1 className='titulo2'>New Chapter</h1>
                    <div className="grupo2">
                        <input className="input2" type="text" id="title" placeholder="Inserte el Titulo" ref={inputTitle}/>
                    </div>
                    <div className="grupo2">
                        <input className="input2" type="text"id="pages" placeholder="Inserte las Paginas" ref={inputPages}/>
                    </div>
                    <div className="grupo2">
                    <input className="input2" type="number"id="order"placeholder="Inserte el orden del capitulo"ref={inputOrder}/>
                    </div>
                    <input type="submit" className='btn1' value="Submit" onClick={save}/>
                </div>
            </form>
        </div>
    )
}

export default Newchapter;