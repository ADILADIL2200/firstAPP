// pages/_app.js
// pages/index.js

import Navbar from './home/navbar';
import Image from 'next/image';
import Setion from './componont/comp';

const Home = () => {
  return (
    <div>
      
    <div className='flex align-center items-center justify-center text-center mt-6 bg-blue-950 w-full h-80'>
      <h1 className='text-blue-500 hover:bg-green-900 '>welcom to TK_2000</h1>
      </div>
      <Setion/>
    </div>
    

    
    

  );
};

export default Home;
