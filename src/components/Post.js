/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import './Post.css'

const Post = ({data}) => {
    console.log(data)

    const ListTag = () => { 
       return (
           data.map((item , index)=>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <div key={index} className ="ui feed  " id = "ui">
                 <div className="event">
                    <div className="label">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                    </div>
                    <div className="content">
                    <div className="summary">
                        <a>{item.title}</a> 
                        <div className="date">
                        3 days ago
                        </div>
                    </div>
                    <div className="extra text">
                        {item.body}
                    </div>
                    <div className="meta">
                        <a className="like">
                        <i className="like icon"></i> 5 Likes
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            
           )
       )
      }
    
      
    return (
        <div   >
            <ListTag/>
            
        </div>
    )
}

export default Post
