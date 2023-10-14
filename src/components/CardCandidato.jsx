import React from 'react'

export const CardCandidato = ({ candidato, onCambiar, indexCandidato }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center  rounded-md  bg-sky-200 mx-5 justify-around' >
            <div >
                <img className='align-top w-full  p-1' src={candidato.picture.large} alt="imagen de candidato" />
            </div>
            <div className='flex flex-col lg:flex-row  justify-around' >
                <div className='lg:mx-4 '>
                    <h3 className='text-2xl text-gray-900 font-bold ' >{`${candidato.name.title} ${candidato.name.first} ${candidato.name.last}`}</h3>
                    <div className='mr-2' >
                        <span className='font-bold' >Ubicación:</span> {`${candidato.location.city} ${candidato.location.country}`}
                    </div>
                    <div><a href="#"><span className='font-bold' >Correo:</span> {candidato.email}</a></div>
                    <div><a href="#"><span className='font-bold'>Teléfono:</span> {candidato.phone}</a></div>
                </div>
                <div className='flex  justify-evenly gap-2 my-2  mr-2 items-end content-end' >
                    <button
                        className='bg-red-700 text-white text-center font-bold w-20 h-10 rounded-md sm:w-24 sm:h-10
                         hover:bg-rose-200 hover:text-rose-600 hover:border-2 border-red-600 transition-[0.5s] ease-in-out  '
                        onClick={() => onCambiar(indexCandidato)}
                    >
                        Cambiar
                    </button>
                    <button
                        className='bg-green-700 text-white text-center font-bold w-20 h-10 rounded-md sm:w-24 sm:h-10
                         hover:bg-green-200 hover:text-green-700 hover:border-2 border-green-700 transition-[0.5s] ease-in-out'
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
