import React, { useState } from 'react';
import axios from 'axios';
import './PhotoUpload.css';

const PhotoUpload = () => {
    const [files, setFiles] = useState([]);

    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const highlight = (e) => {
        e.currentTarget.classList.add('hover');
    };

    const unhighlight = (e) => {
        e.currentTarget.classList.remove('hover');
    };

    const handleDrop = (e) => {
        const dt = e.dataTransfer;
        const droppedFiles = dt.files;
        handleFiles(droppedFiles);
    };

    const handleFiles = (droppedFiles) => {
        const newFiles = Array.from(droppedFiles); // Convert FileList to array
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        uploadFiles(newFiles); // Only upload newly dropped files
    };

    const uploadFiles = async (fileList) => {
        const url = 'YOUR_BACKEND_API_URL'; // Replace with your backend URL
        const formData = new FormData();

        fileList.forEach((file) => {
            formData.append('files', file); // Using the same name for handling on backend
        });

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div
            id="drop-area"
            onDragEnter={highlight}
            onDragOver={preventDefaults}
            onDragLeave={unhighlight}
            onDrop={handleDrop}
        >
            {/* <p>Drag and drop files here, or click to upload</p> */}
        </div>
    );
};

export default PhotoUpload;
