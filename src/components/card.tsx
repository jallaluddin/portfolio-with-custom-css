import React from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface PropsType {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, image, tags }) => {
  return (
    <div className='card-container' data-aos="zoom-in-up">
      <div className='card-image-wrapper'>
        <Image
          className='card-image'
          src={image}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div className='card-description'>{desc}</div>
        <div className='card-tags'>
          {tags.map((el) => (
            <div className='tag-item' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
