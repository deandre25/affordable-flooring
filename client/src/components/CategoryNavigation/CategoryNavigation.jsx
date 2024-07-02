import React from 'react';
import Slider from 'react-slick';
import './CategoryNavigation.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import hardwoodImage from './hardwood_image.jpg';
import carpetImage from './carpet_image.jpg';
import vinylImage from './luxury_vinyl_flooring.jpg';
import laminate from './laminate_image.jpg';
import spc from './spc_image.jpg';
import { Link } from 'react-router-dom';

const CategoryNavigation = () => {
  const categories = [
    { id: 1, name: 'Hardwood', slug: 'hardwood-flooring', imageUrl: hardwoodImage },
    { id: 2, name: 'Carpet', slug: 'carpet-flooring', imageUrl: carpetImage },
    { id: 3, name: 'Luxury Vinyl Flooring', slug: 'vinyl-flooring', imageUrl: vinylImage },
    { id: 3, name: 'SPC', slug: 'spc-flooring', imageUrl: spc },
    { id: 3, name: 'Laminate', slug: 'laminate-flooring', imageUrl: laminate },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="category-navigation">
      <h2>Explore Our Categories</h2>
      <Slider {...settings} className="category-slider">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <Link href={`/${category.slug}`}>
              <img src={category.imageUrl} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryNavigation;