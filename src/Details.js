import React from 'react';
import ReactMarkdown from 'react-markdown';

const Details = (props) => {

  const data = props.location.state
    return (
        <div class="pt-10">
            
             <div class=" rounded overflow-hidden shadow-lg mx-8 bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100  ">
               
  <div class="px-6 py-4 mx-8  ">
    <div class="font-mono text-2xl mb-2">{data.title}</div>
    <p class="text-gray-700 text-justify pt-4 ">
     <ReactMarkdown >
      {data.description}
     </ReactMarkdown>
    </p>
  </div>
  </div>
        </div>
    );
};

export default Details;