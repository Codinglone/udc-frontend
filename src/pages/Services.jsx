import React from 'react'
import NewServices from '../components/NewServices'
import project7 from '../assets/project7.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServicesPage = () => {
  return (
    <> 
            <div  
            className='mt-28 lg:h-[34vh] h-12'
          style={{
            backgroundImage: `url(${project7})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            paddingTop: '1rem'
          
          }}
        >
          <h1 className='lg:text-7xl text-white text-center text-2xl font-bold lg:pl-24 z-20'>Services</h1>
        </div>
      <NewServices imgDir={'left'} title={'Civil Engineering'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur.'}/>
      <NewServices imgDir={'right'} title={'Land Surveying'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur.'}/>
      <NewServices imgDir={'left'} title={'Architectural Design'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur.'}/>
      <NewServices imgDir={'right'} title={'Cost Estimation & Quality Surveying'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, eligendi. Voluptatibus neque temporibus maxime, soluta nihil, ibusdam iste ipsum voluptates ut deleniti facilis! Tenetur maiores nisi possimus et facere perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem impedit, veniam nihil quisquam aliquam temporibus! Quas ratione consectetur molestias nulla asperiores perferendis reiciendis. Iste tempore dolores suscipit culpa pariatur.'}/>
    </>
  )
}

export default ServicesPage
