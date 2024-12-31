
import React, { useState } from 'react';
import axios from 'axios';

const Audiofile = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    duration: '',
    releaseDate: '',
    description: '',
  });
  const [audioFile, setAudioFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!audioFile) {
      alert('Please upload an audio file.');
      return;
    }

    const uploadData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      uploadData.append(key, value);
    });
    uploadData.append('audioFile', audioFile);

    try {
      const response = await axios.post('http://localhost:3016/api/upload-audio', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Audio file uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Error uploading the audio file.');
    }
  };

  return (
    <div className="audio-upload-container">
      <h1>Audio File Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Audio Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Artist Name:</label>
          <input type="text" name="artist" value={formData.artist} onChange={handleChange} required />
        </div>
        <div>
          <label>Album Name:</label>
          <input type="text" name="album" value={formData.album} onChange={handleChange} />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration (HH:MM:SS):</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
        </div>
        <div>
          <label>Release Date:</label>
          <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Upload Audio File:</label>
          <input type="file" accept="audio/*" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload Audio</button>
      </form>
    </div>
  );
};

export default Audiofile;
