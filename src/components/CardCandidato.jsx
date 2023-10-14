import React from 'react'

export const CardCandidato = ({ candidato }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center  rounded-md  bg-sky-200 mx-5 justify-around' >
            <div >
                <img className='p-2 rounded-lg h-40 w-36 ' src={candidato.picture.large} alt="imagen de candidato" />
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
                        className='bg-red-700 text-white text-center font-bold w-20 h-10 rounded-md sm:w-24 sm:h-10 '
                    >
                        Ocultar
                    </button>
                    <button
                        className='bg-green-700 text-white text-center font-bold w-20 h-10 rounded-md sm:w-24 sm:h-10'
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
