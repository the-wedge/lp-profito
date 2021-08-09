import Button from './Button'

export default function Form() {
    return(
        <div className="w-full max-w-md">
            <form className="bg-black bg-opacity-60 shadow-md rounded px-8 pt-8 pb-5 mb-4">
                <div className="mb-3">
                    <label className="block text-white text-sm font-bold mb-2" for="nome">
                        Nome
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nome" type="text" placeholder="Seu nome"/>
                </div>
                <div className="mb-3">
                    <label className="block text-white text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@example.com"/>
                </div>
                <div>
                    <label className="block text-white text-sm font-bold mb-2" for="telefone">
                        Telefone
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="(00) 0000-0000"/>
                </div>
                <div className="flex items-center justify-between">
                <Button 
                    name="Enviar"
                    type="button"
                />
                </div>
            </form>
        </div>

 )

}
