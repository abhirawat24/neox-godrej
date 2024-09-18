import React from 'react';

const Efficiency = () => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='md:w-[50%] w-full h-full'>
        <img
          src="https://www.seqrite.com/skin/frontend/default/seqrite_v1/images/support-img.png"
          alt="img"
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='md:w-[50%] w-full p-6'>
        <p className='text-2xl font-semibold text-center mb-4'>Why Us?</p>
        <p className='text-base text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo consequuntur voluptatem in sit molestias, cum exercitationem quos saepe corporis quod blanditiis officiis at maxime quia odit deleniti similique iste quasi? Corporis facilis blanditiis error. Voluptatem aut assumenda enim earum voluptas, facilis et est ab reiciendis provident, voluptatum facere quam?
        </p>
      </div> 
    </div>
  );
};

export default Efficiency;
