import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (

    <div className="modal-overlay">
      <div className="modal-content">
              <form className='form110 ' /* onSubmit={save} */>
                <div className="form10 ">
                    <h1 className='titulo10 '>Edit Comic</h1>
                      <div className="grupo10 ">
                        <input className="input10 " type="text" id="title" placeholder="Inserte el Titulo" /* ref={inputTitle} *//>
                      </div>
                    < div className="grupo10 ">
                        <input className="input10 " type="text"id="pages" placeholder="Inserte las Paginas" /* ref={inputPages} *//>
                      </div>
                      <div className="grupo10 ">
                        <input className="input10 " type="number"id="order"placeholder="Inserte el orden del capitulo"/* ref={inputOrder} *//>
                      </div>
                    <input type="submit" className='btn10 ' value="Edit" /* onClick={save} *//>
                    <input type="submit" className='btn110 ' value="Delete" />
                </div>
            </form>
      </div>
    </div>

  );
}

export default Modal;