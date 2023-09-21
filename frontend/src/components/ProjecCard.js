import React from 'react'
import './card.module.css'

export default function ProjecCard() {
  return (
    <div className='card'>
        <div className="header">
            <div className="img"></div>
            <div className="projectInfo">
                <h2 className="projectName">This Is project name</h2>
                <div className="authorInfo">
                    <p className="authName">Aftab Alam</p>
                    <p className="publishDate">13/5/2023</p>
                </div>
            </div>
            <div className="projectDesription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam, quas quidem ab nesciunt veritatis doloremque, ipsa illo earum impedit sed dolor similique assumenda libero obcaecati dolore vitae, non temporibus!
            </div>
        </div>
      
    </div>
  )
}
