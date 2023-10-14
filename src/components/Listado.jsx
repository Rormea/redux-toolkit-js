import React, { useEffect, useState } from 'react'
import { CardCandidato } from './CardCandidato'
import { Layout } from './layout'

export const Listado = () => {

    const [candidatos, setCandidatos] = useState([])

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



    return (
        <>
            <Layout title='Los Candidatos' >
                {
                    candidatos.map((candidato, i) => (
                        <CardCandidato key={i} candidato={candidato} onCambiar={cambiarUnCadidato} indexCandidato={i} />
                    ))
                }
            </Layout>


        </>
    )
}
