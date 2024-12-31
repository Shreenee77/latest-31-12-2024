import React, { useState } from 'react';

const Galleryupload = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
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

  const handleSubmit = () => {
    if (image && title) {
      // Implement the logic to upload the image and data to the server
      console.log('Uploading image with title:', title, 'and description:', description);
    } else {
      alert('Please provide a title and select an image');
    }
  };

  return (
    <div className="imgcenter">
    <div className="image-upload-container">
      <h2>Upload Your Image</h2>

      <div className="input-group">
        <label htmlFor="title">Image Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="image-input"
          placeholder="Enter image title"
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="image-input"
          placeholder="Enter image description"
        />
      </div>

      {/* Image Input */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="image-input"
      />

      <div className="image-preview-container">
        {imagePreview ? (
          <img 
            src={imagePreview} 
            alt="Preview" 
            className="image-preview"
          />
        ) : (
          <div className="image-placeholder">No image selected</div>
        )}
      </div>

      {/* Upload Button */}
      <button onClick={handleSubmit} className="upload-button">
        Upload Image
      </button>
    </div>
    
    </div>
  );
};

export default Galleryupload;
