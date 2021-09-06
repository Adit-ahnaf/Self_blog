import React from 'react';

const Navigation = () => {
    return (

<section class="relative shadow-lg m-5 p-5 text-gray-700 bg-purple-100   body-font ">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
  
        <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            
            <a href="/" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 " x-data="{ hover: false }" mouseenter="hover = true" mouseleave="hover = false">
                <span class="block">Blog</span>
                <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                   
                </span>
            </a>
            
            <a href="/about" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" mouseenter="hover = true" mouseleave="hover = false">
                <span class="block">About</span>
                <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                  
                </span>
            </a>
        </nav>

    </div>
</section>

    
    );
};

export default Navigation;