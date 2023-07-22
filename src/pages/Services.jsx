import React from 'react'
import NewServices from '../components/NewServices'
import project7 from '../assets/project7.jpg'

const ServicesPage = () => {
  return (
    <> 
            <div  
            className='mt-44'
          style={{
            backgroundImage: `url(${project7})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30vh',
            width: '100%',
          
          }}
        >
          <h1 className='lg:text-7xl text-white text-center font-bold lg:pl-24 lg:py-16 z-20'>Services</h1>
        </div>
      <NewServices imgDir={'left'} title={'Civil Engineering'} />
      <NewServices imgDir={'right'} title={'Land Surveying'} />
      <NewServices imgDir={'left'} title={'Architectural Design'} />
    </>
  )
}

export default ServicesPage
