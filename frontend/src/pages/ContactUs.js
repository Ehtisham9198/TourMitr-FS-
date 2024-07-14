import React from 'react';
import './contact.css';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className='main text-center'>
        <h1 className='sec mb-4'>CONTACT US</h1>
        <div className='secc'>
        <h3>+91 9198851103</h3>
        <h3>b522035@iiit-bh.ac.in</h3>
        <h3>IIIT BBSR, Gothapatna 751003</h3>
      </div>
      </div>
      </Layout>
  )
}

export default Contact