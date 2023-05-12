// import React, { useState } from 'react';
// import Photo from './Photo';


// const Album = () => {
//   const [photos, setPhotos] = useState([]);
//   const [url, setUrl] = useState('');
//   const [caption, setCaption] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (url && caption) {
//       const newPhoto = { url, caption };
//       setPhotos([...photos, newPhoto]);
//       setUrl('');
//       setCaption('');
//     }
//   };

//   const handleUrlChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleCaptionChange = (e) => {
//     setCaption(e.target.value);
//   };

//   return (
//     <div>
        
//       <h2>Album</h2>

//       {photos.map((photo, index) => (
//         <Photo key={index} url={photo.url} caption={photo.caption} />
//       ))}

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="URL de la photo" value={url} onChange={handleUrlChange} />
//         <input type="text" placeholder="Légende de la photo" value={caption} onChange={handleCaptionChange} />
//         <button type="submit">Ajouter</button>
//       </form>
//     </div>
//   );
// };

// export default Album;