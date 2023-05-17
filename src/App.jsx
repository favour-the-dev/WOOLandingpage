import Navbar from "./cmponenets/Navbar";
import Main from "./cmponenets/Main";
import Features from "./cmponenets/features";
import Users from "./cmponenets/userReview";
import Support from "./cmponenets/support";
import Getstarted from "./cmponenets/Getstarted";
import Banner from "./cmponenets/banner";
import Footer from "./cmponenets/Footer";
import product from '../src/assets/images/product.svg';
import cmp from '../src/assets/images/stripe.svg';
import details from '../src/assets/images/details.svg';
import community from '../src/assets/images/community.svg';

function App() {
 

  return (
    <>
      <Navbar />
      <Main />
      <Features 
        title='Everything you need to start selling online'
        title2='Customize and Extend'  
        body='Add WooCommerce pluggin to any website and set up a new store in minutes. Get secure payments. configurable shopping options. and more out of the box-for free'
        body2='From Subscriptions to gym classes to luxury cars, WooCommerce is fully customizabble. Add features and extend functionality of your store with official extensions from the WooCommerce Marketplace.' 
        btntext='Ecommerce for wordpress >'
        btntext2='Browse Extensions >' 
        ImageSrc={product}
        ImageSrc2={cmp}
        order1 = 'order-two'
        order2 = 'order-1'
        order11 = 'order-1'
        order22 = 'order-2'
      />
      <Users />
      <Features 
        title='Develop Without Limits'
        title2='Leran With a Global Community'  
        body='WooCommerce is developer friendly, too. Built with REST API, WOO commerce is scalable, and integrate with  virtually any service. Deasign a complexstore from scratch, extend a store for a client, or simply add a singlen product to website your store, your way'
        body2='WooComerce is one of the fastest growing eCommerce communities. Were proud hat the helpfulness of our community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide' 
        btntext='ecommerce for wordpress'
        btntext2='join a meetup' 
        ImageSrc={details}
        ImageSrc2={community}
        order1 = 'order-two'
        order2 = 'order-one'
        order11 = 'order-1'
        order22 = 'order-2'
      />
      <Support />
      <Getstarted />
      <Banner />
      <Footer />
    </>
  )
}

export default App
