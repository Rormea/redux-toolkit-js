import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from './layout'
import { Link } from 'react-router-dom'
import { Preselecionado } from './Preselecionado'
import { modificarPlaza } from '../store/miSlice'

export const Gestion = () => {

    const listaPreseleccionados = useSelector(state => state.preSelecionados.preElegidos)

    const dispatch = useDispatch();


    const actualizarPlaza = (plaza, index) => {
        dispatch(modificarPlaza(
            {
                indice: index,
                nuevaPlaza: plaza
            }
        ))
    }


    return (
        <>
            <div className=' flex mt-16 p-4 items-center content-center justify-center' >
                <Link to={"/candidatos"} >
                    <button
                        className='bg-green-700 text-white text-center font-bold w-56 h-16 rounded-md sm:w-60 sm:h-16
                         hover:bg-green-200 hover:text-green-700 hover:border-2 border-green-700 transition-[0.5s] ease-in-out'
                    >
                        Revisar Candidatos sin Pre-Seleccion
                    </button>
                </Link>
            </div>

            <Layout title='Lista de Pre Selecionados' >
                {
                    listaPreseleccionados.map((candidato, i) =>

                        <Preselecionado key={i} candidato={candidato} onActulizarPlaza={actualizarPlaza} />

                    )
                }
            </Layout>

        </>

    )
}
