import React from "react";
import { LinearGradient } from 'react-text-gradients'

const MainContent: React.FC = () => {
    
  return (
    <main className="p-7">
      <div className="max-w-4xl mx-auto">
        <p className="flex justify-center text-2xl"> <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>   Discover the power of AI. </LinearGradient></p>
      </div>
    </main>
  );
};

export default MainContent;