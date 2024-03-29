import React from 'react';
import Menu from '../components/Menu';
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import { useState,useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import moment from "moment"
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Single = () => {
    const [post, setPost] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const postId  = location.pathname.split("/")[2];
    const {currentUser} = useContext(AuthContext)
    
    useEffect(() => {
     const fetchData = async () =>{
      try {
        const res = await axios.get(`/posts${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
     }
     fetchData();
    }, [postId])
    // function to handle delete
    const handleDelete = async ()=>{
      try {
        await axios.delete(`/posts${postId}`)
        navigate("/")
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className='single'>
        <div className='content'>
           
            <img src={post?.img} alt=""/>
            <div className='user'>
                {post.userImg && <img src={post.userImg}/>}
                <div className='info'>
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                {currentUser.username === post.username && (<div className='edit'>
                    <Link to={`/write/edit=2`}>
                    <img src={Edit} alt=""/>
                    </Link>
                    <img onClick={handleDelete} src={Delete} alt=""/>
                </div>)}
            </div>
            <h1>{post.title}</h1>
            {post.desc}
        </div>
        <div className='menu'>
            <Menu/>
        </div>
    </div>
  )
}

export default Single;