import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Form() {
    
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Sending')

    let data = {
        name,
        email,
        phone
    }

    fetch('api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {

            Swal.fire({
                icon: 'success',
                title: 'Mensagem enviada com sucesso!',
                showConfirmButton: false,
                timer: 3000
            })

            setSubmitted(true) 
            setName('')
            setEmail('')
            setPhone('')
        }
    })
  }

    return(
        <div className="w-full max-w-md">
            <form className="bg-black bg-opacity-60 shadow-md rounded px-8 pt-8 pb-5 mb-4">
                <div className="mb-3">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Nome
                    </label>
                    <input require="true" onChange={(e)=>{setName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nome" name="name" type="text" placeholder="Seu nome"/>
                </div>
                <div className="mb-3">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input require="true" onChange={(e)=>{setEmail(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="email@example.com"/>
                </div>
                <div>
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                        Telefone
                    </label>
                    <input require="true" onChange={(e)=>{setPhone(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="telefone" name="phone" type="text" placeholder="(00) 0000-0000"/>
                </div>
                <div className="flex items-center justify-between">
                <input className="bg-yellow-700 hover:bg-opacity-75 text-white py-2 px-6 my-5" type='submit' onClick={(e)=>{handleSubmit(e)}}/>
                </div>
            </form>
        </div>

 )

}
