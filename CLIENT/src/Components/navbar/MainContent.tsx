import React from "react";
import { LinearGradient } from 'react-text-gradients'

const MainContent: React.FC = () => {
    
  return (
    <main className="p-7 mt-6">
      <div className="max-w-7xl mx-auto">
      <p className="flex justify-center text-3xl text-[px] xl:text-5xl  xl:leading-[2]"> <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>   Discover the power of AI led music generation. </LinearGradient></p>
      </div>
    </main>
  );
};

export default MainContent;
