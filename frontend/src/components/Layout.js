import React from 'react';
import Header from './Navebar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import {Toaster} from 'react-hot-toast';



const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main style={{ minHeight: '70vh' }}> 
     <Toaster/>
      {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultPropes={
  title : 'Local Tourism',
  description:'An Interactive app',
  keywords:'Tourism , heritage , place',
  author:'Ehtisham'
}
export default Layout;