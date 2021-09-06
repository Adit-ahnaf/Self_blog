import React from 'react';

const About = () => {
    return (

        <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 bg-green-200">
         <div>  
        <section class="relative py-20 overflow-hidden bg-red-200">
        
        <div class="relative px-16 mx-auto max-w-md  ">
                        <div class="absolute z-5 w-full h-full -mt-10 -ml-5  rounded-full rounded-tr-none bg-blue-50"></div>
                        <img class="relative z-20 w-full rounded-full" src="mahi.jpg"/>
                    
                    <div class="mt-3 space-y-2 text-center ">
                        <div class="space-y-1 text-lg font-medium leading-6 ">
                            <h3>Adit Ahnaf Khan</h3>
                        </div> 
                    </div>
            
                        
                    </div>
    </section>
    </div>

    <div>
    <section class="py-20 bg-blue-200">
  <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div class="flex flex-wrap items-center -mx-3">
      <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div class="w-full lg:max-w-md">
          <h2 class="mb-4 text-xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Hi !!</h2>
          <p class="mb-4 font-medium tracking-tight text-gray-700 xl:mb-6 text-justify">Welcome to my portal. Hope you will find things insightful here. I am Adit, trying to fixup myself day by day. I like to work with development sectors of programming and try to solve programming problems little bit. Solving problems, reading documentaries, watching movies and playing guitar helps me to keep my mind fresh. Have a good day !!! :D  </p>
          
        </div>
      </div>
      <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"/></div>
    </div>
  </div>
</section>

    </div>


    </div>
    );
};

export default About;