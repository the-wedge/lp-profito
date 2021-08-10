import React from 'react';
import Button from '../components/Button'

export default function Submit() {
  return (
    <main>
      <div id="banner" className="bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url("https://source.unsplash.com/random")` }}> 
        <div className="flex flex-wrap items-center justify-center h-screen">
          <div className=" w-full lg:w-4/5 px-8">
            <h1 className="text-5xl text-white pt-8 pb-3 font-bold"> Agradecemos seu interesse!</h1>
            <p className="text-white pt-3 pb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="/">
                <Button
                name="<- Retornar para landingpage"
                type="button"
                />
              </a>
          </div>
        </div>
      </div>
      <footer className=" flex flex-col items-center bg-gray-500 text-white py-14">
        <div className="w-full text-center">
          <img className="w-24 block m-auto rounded shadow-md" src="https://source.unsplash.com/random" />
        </div>
        <div className=" flex flex-wrap text-center">
          <img className="w-8 block m-auto rounded shadow-md mt-8 mx-3" src="https://source.unsplash.com/random" />
          <img className="w-8 block m-auto rounded shadow-md mt-8 mx-3" src="https://source.unsplash.com/random" />
          <img className="w-8 block m-auto rounded shadow-md mt-8 mx-3" src="https://source.unsplash.com/random" />
        </div>
      </footer>
    </main>
  )
}