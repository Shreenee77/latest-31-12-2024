import React, { useState } from 'react';

const Imagevideoupload = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if ((image || video) && title) {
      // Implement the logic to upload image/video and data to the server
      console.log('Uploading:', title, description);
    } else {
      alert('Please provide a title and select an image or video');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Image/Video</h2>

      {/* Title Input */}
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>

      {/* Description Input */}
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      {/* Image Input */}
      <div className="input-group">
        <label htmlFor="image">Select Image</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={handleImageChange}
        />
      </div>

      {/* Video Input */}
      <div className="input-group">
        <label htmlFor="video">Select Video</label>
        <input
          type="file"
          accept="video/*"
          id="video"
          onChange={handleVideoChange}
        />
      </div>

      {/* Image Preview */}
      <div className="preview-container">
        {imagePreview && (
          <img src={imagePreview} alt="Image Preview" className="preview" />
        )}
        {videoPreview && (
          <video controls className="preview">
            <source src={videoPreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit} className="submit-button">
        Upload
      </button>
    </div>
  );
};

export default Imagevideoupload;
