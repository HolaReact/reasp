import React, { useState, useEffect } from 'react';
import './faqs.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination ,Navigation,Scrollbar,A11y} from 'swiper';
import {AiFillDelete} from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const PostPhotosField = () => {
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();

    if (description && selectedImage) {
      const newPost = {
        description,
        image: selectedImage,
      };

      setPosts([...posts, newPost]);

      setDescription('');
      setSelectedImage(null);
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

 
  const handleEditDescription = (postId) => {
    setEditingId(postId);
  };

  const handleSaveDescription = (postId, newDescription) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, description: newDescription };
      }
      return post;
    });
    setPosts(updatedPosts);
    setEditingId(null);
  };

  return (
    <div>
     <div className="profile-container">
      <h1>Post Photos</h1>
      <div className="profile-picture">
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <img
          src={selectedImage ? selectedImage : 'default-profile-pic.png'}
          alt="Profile"
          className="profile-img"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="upload-input"
        />
        <button type="submit">Post</button>
      </form>
      </div>
      </div>
      <br/>
      <div className="posts-container" style={{display:"flex",flexDirection:"row"}}>
      <Swiper style={{width:"5cm"}}
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {posts.map((post, index) => (
          <SwiperSlide >
          <div key={index} className="post" style={{marginLeft:"10px",}}>
            <img src={post.image} alt={`Post ${index}`} height={300} width={150} style={{borderRadius:"10%"}}/>
         
            {editingId === post.id ? (
              <div>
                <input
                  type="text"
                  value={post.description}
                  onChange={(e) => handleSaveDescription(post.id, e.target.value)}
                />
                <button onClick={() => handleSaveDescription(post.id, post.description)} className='savebtn' style={{width:"1cm"}}>Save</button>
              </div>
            ) : (
              <div>
                <p>{post.description}</p><br/><br/>
                <div style={{display:"flex",flexDirection:"row"}}>
                <button onClick={() => handleEditDescription(post.id)} className='btn primary'>Edit</button>
                <button onClick={() => handleDeletePost(post.id)} style={{marginLeft:"10px", fontSize:"20px",color :"red"}}><AiFillDelete/></button>
               </div>
              </div>
            )}
          </div>
          </SwiperSlide>
        ))}
        </Swiper>

      </div>
    </div>
  );
};

export default PostPhotosField;
