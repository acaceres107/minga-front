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
                        <input className="input10 " type="text" id="title" placeholder="Inserte el Titulo nuevo" /* ref={inputTitle} *//>
                      </div>
                    < div className="grupo10 ">
                        <input className="input10 " type="text" id="pages" placeholder="Inserte la nueva Descripcion" /* ref={inputPages} *//>
                      </div>
                      < div className="grupo10 ">
                        <select name="New Category">
                          <option value="value1" selected>Shonen</option>
                          <option value="value2">Manhwa</option>
                          <option value="value3">Marvel</option>
                          <option value="value4">DC</option>
                          <option value="value5">Shojo</option>
                          <option value="value6">Seinen</option>
                        </select>
                      </div>
                      <div className="grupo10 ">
                        <input className="input10 " type="image" id=""placeholder="Inserte la nueva imagen de Portada"/* ref={inputOrder} *//>
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