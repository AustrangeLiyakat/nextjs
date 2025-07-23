"use client"

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { div } from 'motion/react-client';

/*
//search feature 
filter featured 
people review featured with nested routing 
*/

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
  async function fetchdata() {
    const api_data = await fetch('https://dummyjson.com/products') 

     const  produtcs  = await api_data.json();


     return setData(produtcs.products)
    
  }
    fetchdata()
  }, []);

console.log(data);

  return (
      <div className='flex flex-wrap ' >
      {       
            data.map((val,index)=>(
              <div key={index} className="ml-[3%] w-[30%]">
               <CardContainer className='w-full' >
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-30rem md:w-[100%] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {val?.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {val?.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4 ">
                        <Image
                           src={val.thumbnail}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex flex-wrap justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="a"
                          href="#"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Buy Now →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Add to Cart
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>    
                  </div>
              
            ) )
      }
     
     </div>

  );
}

export default MyComponent;