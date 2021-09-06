import React,{useContext} from 'react';
import { titleProvider } from './Datascrap';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Homepage = () => {

  const [users] = useContext (titleProvider);
  
  {/*const user = users.map((user)=>{
    return user;
  }) 
  console.log(user)

  const image = users.map((user)=>{
    return user.Image[0].url;
  }) 

  const title = users.map((user)=>{
    return user.title;
  }) 

  const category = users.map((user)=>{
    return user.categories[0].categoryname;
  }) */}
    return (
   <div>
      
          <section class="relative  w-full bg-blue-100 ">
       <div class="absolute w-full h-32 bg-blue-100 to-white"></div>
       <div class="relative w-full  px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl ">
   
           <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3 "><a href="#_">Hello There! </a></h1>
           <p class="text-lg font-medium text-gray-500 sm:text-2xl">Hi! I am Adit. Here have some contents for you. Probably you will like it :)</p>
           
                <div class=" grid h-full  grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                <div class=" grid grid-cols-12 col-span-12 gap-10">
              { 
              users.map(user=>(
                <div class="flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src={`http://localhost:1337${user.Image[0].url}`}/>
                        
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>{user.categories[0].categoryname}</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><Link to={{
           pathname: "/details",
           state:user,
         }}>{user.title}</Link></h2>
                       
                    </div>
                </div>
                ))
          }                
            </div>
            </div>
              
              

           
       </div>
          
   </section>

      

       
    
  </div>
    );
};

export default Homepage;