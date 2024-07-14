import React from 'react'
import './About.css';
import Ecom from '../assets/tour.jpg';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title = {'About us'}>
      <div className='con'>
    <h1 >Nice to meet you </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam cumque,
       rem velit dolores totam aperiam aliquid recusandae nobis facilis laboriosam officia? 
       Modi dolore eaque molestias aut quos unde est sunt saepe nostrum voluptates sapiente aperiam cumque exercitationem, 
    </p>
    <img src={Ecom} alt="Ecom image" className='ecomimage' width={450}/>
    </div>
    </Layout>

  )
}

export default About