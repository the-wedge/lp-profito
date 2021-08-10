import React from 'react';
import Form from '../components/Form'
import Button from '../components/Button'

export default function Home() {
  return (
    
    <main>
      <div className="bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url("https://source.unsplash.com/random")` }}> 
        <div className="flex flex-wrap items-center justify-center h-screen">
          <div className=" w-full lg:w-2/5 ">
            <h1 className="text-6xl text-white px-8 pt-8 pb-3 font-bold"> Investidor Profitto</h1>
            <h3 className="text-3xl text-white px-8 pt-3 pb-8"> Determinado, sonhador, exclusivo.</h3>
          </div>
          <div className="w-full lg:w-2/5">
            <Form />
          </div>
        </div>
      </div>
      
      <section id="sobre">
        <div className="flex flex-wrap items-center justify-center py-14">
          <div className=" flex w-max md:w-2/5 ">
            <img className="w-5/12 rounded shadow-md" src="https://source.unsplash.com/random" />
            <img className="w-5/12 rounded shadow-md m-8 h-auto" src="https://source.unsplash.com/random" />
          </div>
          <div className="w-max md:w-2/5">
            <div className="container">
              <h1 className="text-5xl"> What is Lorem Ipsum?</h1>
              <p className="pt-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <a href="#">
                <Button
                name="Saiba mais"
                type="button"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="ibge">
        <div className="flex flex-row items-center justify-center py-14 text-white bg-black">
          <div className="w-full md:w-3/5 text-center">
            <div className="container">
              <h1 className="text-5xl"> What is Lorem Ipsum?</h1>
              <img className="w-28 block m-auto rounded shadow-md mt-8 mb-3" src="https://source.unsplash.com/random" />

              <p className="pt-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <a href="#">
                <Button
                name="Faça parte da equipe"
                type="button"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

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
