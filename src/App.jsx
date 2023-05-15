import Navbar from "./cmponenets/Navbar";
import Main from "./cmponenets/Main";
import Features from "./cmponenets/features";
import Users from "./cmponenets/userReview";
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
        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos?'
        title2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos?'  
        body=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rerum excepturi tempora molestias! Itaque ipsam est voluptates incidunt neque, quisquam sequi deserunt esse, quae distinctio perspiciatis ipsa, et dicta ab?'
        body2=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rerum excepturi tempora molestias! Itaque ipsam est voluptates incidunt neque, quisquam sequi deserunt esse, quae distinctio perspiciatis ipsa, et dicta ab?' 
        btntext='Lorem ipsum dolor'
        btntext2='Lorem ipsum dolor' 
        ImageSrc={product}
        ImageSrc2={cmp}
        order1 = 'order-two'
        order2 = 'order-1'
        order11 = 'order-1'
        order22 = 'order-2'
      />
      <Users />
      <Features 
        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos?'
        title2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos?'  
        body=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rerum excepturi tempora molestias! Itaque ipsam est voluptates incidunt neque, quisquam sequi deserunt esse, quae distinctio perspiciatis ipsa, et dicta ab?'
        body2=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rerum excepturi tempora molestias! Itaque ipsam est voluptates incidunt neque, quisquam sequi deserunt esse, quae distinctio perspiciatis ipsa, et dicta ab?' 
        btntext='Lorem ipsum dolor'
        btntext2='Lorem ipsum dolor' 
        ImageSrc={details}
        ImageSrc2={community}
        order1 = 'order-two'
        order2 = 'order-one'
        order11 = 'order-1'
        order22 = 'order-2'
      />
    </>
  )
}

export default App
