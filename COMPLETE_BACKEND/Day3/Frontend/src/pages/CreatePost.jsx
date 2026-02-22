import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()


        const formData = new FormData(e.target)

        axios.post(`${API_URL}/create-post`, formData)
            .then((res) => {

                navigate("/feed")

            })
            .catch((err) => {
                console.log(err)
                alert("Error creating post")
            })


    }

    return (
        <section className='create-post-section' >
            <div className='nav-bar'>
                <h1>Create post</h1>
                <button onClick={() => navigate('/feed')}>View Feed</button>
            </div>

            <form onSubmit={handleSubmit} >

                <input type="file" name="image" accept="image/*" />
                <input type="text" name='caption' placeholder='Enter caption' required />
                <button type='submit' >Submit</button>

            </form>

        </section>
    )
}

export default CreatePost
