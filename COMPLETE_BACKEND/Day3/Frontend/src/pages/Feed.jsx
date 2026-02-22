import React, { useState,useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const Feed = () => {

    const navigate = useNavigate()
    const [ posts, setPosts ] = useState([])

    useEffect(()=>{

        axios.get(`${API_URL}/posts`)
        .then((res)=>{

            setPosts(res.data.posts)

        })
        
    },[])
    

    return (

        <section className='feed-section' >

            <div className='nav-bar'>
                <h1>Feed</h1>
                <button onClick={() => navigate('/create-post')}>Create Post</button>
            </div>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>

    )
}

export default Feed
