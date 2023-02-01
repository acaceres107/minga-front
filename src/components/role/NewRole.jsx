import React from 'react'
import { Link } from 'react-router-dom'
import "./NewRole.css"
function NewRole() {
  return (
    <div className='role-container'>
        <div className='options-container'>
            <div className='text-minga'>
                <p>Sing up to</p>
                <h1>Minga.com</h1>
            </div>
            <div className='links-container'>
              <Link to='/new-author'>
                <div>
                    <img src="assets/group32.png" alt="img" />
                    <div className='text-links'>
                      <h4>Join as an Author!</h4>
                      <p>I'm a reader writting a manga</p>
                    </div>
                </div>
              </Link>
              <Link>
                <div>
                    <img src="assets/group35.png" alt="img" />
                    <div className='text-links'>
                      <h4>Join as an Company!</h4>
                      <p>I'm a company and i want to publish my comics</p>
                    </div>
                </div>
              </Link>
            </div>
        </div>
        <div className='img-role'>
            <img src="assets/newroleBkg.png" alt="" />
        </div>
    </div>
  )
}

export default NewRole