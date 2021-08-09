import React from 'react';
import Form from '../components/Form'

export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: `url("https://source.unsplash.com/random")` }}> 
      <div className="flex flex-row items-center h-screen">
        <div className="w-full md:w-3/5 ">
          <h1 className="text-6xl text-white px-8 pt-8 pb-3 font-bold"> Investidor Profito</h1>
          <h3 className="text-3xl text-white px-8 pt-3 pb-8"> Determinado, sonhador, exclusivo.</h3>
        </div>
        <div className="w-full md:w-2/5">
          <Form />
        </div>
      </div>
    </div>


  )
}
