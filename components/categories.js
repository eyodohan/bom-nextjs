import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';

import CategoryItem from './category-item';
import Title from './title';

const Categories = (props) => {
  const [categories, setCategories] = useState(props.categories);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        marginBottom: '50px',
        paddingTop: '50px',
        paddingX: { xs: '0', md: '10%', lg: '20%' },
      }}
    >
      <Title>Başlıca Kategoriler</Title>
      <Slider {...settings}>
        {categories &&
          categories.map((category) => (
            <CategoryItem
              imgUrl={category.link}
              name={category.name}
              key={category.link}
            />
          ))}
      </Slider>
    </Box>
  );
};

export default Categories;
