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



    return (
        <>
            <Layout title='Los Candidatos' >
                {
                    candidatos.map((candidato, i) => (
                        <CardCandidato key={i} candidato={candidato} />
                    ))
                }
            </Layout>


        </>
    )
}
