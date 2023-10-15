import React, { useEffect, useState } from 'react'
import { CardCandidato } from './CardCandidato'
import { Layout } from './layout'
import { useDispatch, useSelector } from 'react-redux'
import { agregarPreSelec } from '../store/miSlice'
import { Link } from 'react-router-dom'

export const Listado = () => {

    const [candidatos, setCandidatos] = useState([])

    const dispatch = useDispatch();

    const listaPreseleccionados = useSelector(state => state.preSelecionados.preElegidos)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=8`)
            .then(resp => resp.json())
            .then(data => setCandidatos(data.results))
    }, [])

    const cambiarUnCadidato = (indexCandidato) => {
        fetch(`https://randomuser.me/api/?results=1`)
            .then(resp => resp.json())
            .then((data) => {
                const provisional = [...candidatos]
                provisional[indexCandidato] = { ...data.results[0] }
                setCandidatos(provisional);
            })
    };

    const preSelecionarUno = (candidato, indexCandidato) => {

        const candidatoPlusPlaza = { ...candidato, plaza: "" }
        dispatch(agregarPreSelec(candidato))
        cambiarUnCadidato(indexCandidato)
    };



    return (
        <>
            <Layout title='Los Candidatos' >
                {
                    candidatos.map((candidato, i) => (
                        <CardCandidato key={i} candidato={candidato} onCambiar={cambiarUnCadidato} onGuardar={preSelecionarUno} indexCandidato={i} />
                    ))

                }
            </Layout>

            <div className=' flex mt-16 p-4 items-center content-center justify-center'>
                <Link to={"/gestion"} >
                    <button
                        className='bg-green-700 text-white text-center font-bold w-56 h-16 sm:w-full rounded-md sm:h-16  sm: px-2
                         hover:bg-green-200 hover:text-green-700 hover:border-2 border-green-700 transition-[0.5s] ease-in-out'
                    >
                        Ir a Pre-seleccionados
                    </button>
                </Link>
            </div>

        </>
    )
}
