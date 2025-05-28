import React from 'react'
import { useState } from 'react';


const allImages = [
  {
    title:'shdks',
    src: '/assets/images/gallery/1.jpg',
    category: 'Events',
  },
  {
    title:'shdks',
    src: '/assets/images/gallery/2.jpg',
    category: 'Events',
  },
  {
    title:'shdks',
    src: '/assets/images/gallery/3.jpg',
    category: 'Class',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/4.jpg',
    category: 'Class',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/5.jpg',
    category: 'Activities',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/6.jpg',
    category: 'Activities',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/7.jpg',
    category: 'Events',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/8.jpg',
    category: 'Class',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/10.jpg',
    category: 'Events',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/11.jpg',
    category: 'Class',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/12.jpg',
    category: 'Class',
  },  {
    title:'shdks',
    src: '/assets/images/gallery/13.jpg',
    category:'Class',
  }, 
 ]

        const categories = ['All', 'Activities', 'Class', 'Events',];

      const Gallery = () => {

        const [selectedCategory, setSelectedCategory] = useState('All');
        const filteredImages =
        selectedCategory === 'All'
          ? allImages
          : allImages.filter((img) => img.category === selectedCategory);
  return (
<div>

<div className="container py-4">
  {/* Filter Buttons */}
  <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

  {/* Image Grid */}
  <div className="image-grid">
    {filteredImages.map((img, index) => (
      <div key={index} className="grid-item">
        <img src={img.src} alt={img.category} className="big-img"/>
        <div className ="overlay overlayeffect"></div>
      </div>
    ))}
  </div>

</div>
</div>


  )}

export default Gallery
