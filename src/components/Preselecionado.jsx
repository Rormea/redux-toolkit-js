import React from 'react'
import { useSelector } from 'react-redux'

export const Preselecionado = ({ elegido, indexElegido, onActulizarPlaza, onEliminar }) => {

    const ListaDePlazas = useSelector(state => state.misPlazas.plazas)


    return (
        <div className='flex flex-col lg:flex-row items-center  rounded-md  bg-sky-200 mx-5 justify-around' >
            <div >
                <img className='align-top w-full  p-1' src={elegido.picture.large} alt="imagen de elegido" />
            </div>
            <div className='flex flex-col lg:flex-row  justify-around' >
                <div className='lg:mx-4 '>
                    <h3 className='text-2xl text-gray-900 font-bold ' >{`${elegido.name.title} ${elegido.name.first} ${elegido.name.last}`}</h3>
                    <div className='mr-2' >
                        <span className='font-bold' >Ubicación:</span> {`${elegido.location.city} ${elegido.location.country}`}
                    </div>
                    <div><a href="#"><span className='font-bold' >Correo:</span> {elegido.email}</a></div>
                    <div><a href="#"><span className='font-bold'>Teléfono:</span> {elegido.phone}</a></div>

                    <div className='mt-3 mb-4' >
                        <select onChange={e => onActulizarPlaza(e.target.value, indexElegido)} >
                            <option value="">Selecciona</option>
                            {
                                ListaDePlazas.map((plaza, i) =>

                                    elegido.plaza === plaza
                                        ? <option selected key={i} >{plaza}</option>
                                        : <option key={i} >{plaza}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className='flex my-2  mr-2 items-end justify-center content-end' >
                    <button
                        className='bg-red-700 text-white text-center font-bold w-20 h-10 rounded-md sm:w-24 sm:h-10
                         hover:bg-rose-200 hover:text-rose-600 hover:border-2 border-red-600 transition-[0.5s] ease-in-out  '
                        onClick={() => onEliminar(indexElegido)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
