import React from 'react'
import image from '../assets/Khandagiri.webp'
import deras from '../assets/deras.jpg'
import biju from '../assets/biju.jpg'
import Layout from './Layout'


const Home = () => {
  return (
    <div>
      <Layout title ={'homepage'}>
        <div className="flex justify-center mt-16 space-x-4 ml-4 mr-4">
        <img src={image} height={400} width={450} alt="khandagiri" className='rounded-md' />
        <img src={deras} height={400} width={450} alt="deras-dam" className='rounded-md' />
        <img src={biju} height={400} width={450} alt="biju patnaik park" className='rounded-md' />
        </div>
        </Layout>
    </div>
  )
}

export default Home