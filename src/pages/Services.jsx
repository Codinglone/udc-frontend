import React from 'react'
import NewServices from '../components/NewServices'
import project7 from '../assets/project3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServicesPage = () => {
  return (
    <> 
            <div  
            className='mt-28 lg:h-[45vh] h-12'
          style={{
            backgroundImage: `url(${project7})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            paddingTop: '1rem'
          
          }}
        >
          <h1 className='lg:text-7xl text-white my-32 text-center text-2xl font-medium lg:pl-24 z-20'>Services</h1>
        </div>
      <NewServices imgDir={'left'} title={'Civil Engineering'} content={'We undertake Civil Engineering And Infrastructure projects, by Creating stable structure frames in modern Software’s by considering necessary loadings factors and design that capable of withstanding applied loads, hence we unsure smooth Construction on site, by implementing every single detail with proper construction materials.'}/>
      <NewServices imgDir={'right'} title={'Architectural Design'} content={'Our expert team specializes in providing comprehensive planning solutions that maximize land use, promote sustainable development, and enhance quality of life we embrace innovation and thinking out -of- box to deliver unique inspiring designs.'}/>
      <NewServices imgDir={'left'} title={'Land Surveying'} content={'Our Design team never imagine terrain they follow Geo - Data brought in office by our surveyors which help them To determine your plot boundaries and zoning and also help you get all the necessary information about your land and properties.'}/>
      <NewServices imgDir={'right'} title={'Cost Estimation & Quality Surveying'} content={'As starting point of every project and key point for any estimate we work under client Budget and meet envision Building, by taking into consideration, skilled labor and defined material Specification by utilizing well detailed drawings.'}/>
    </>
  )
}

export default ServicesPage
