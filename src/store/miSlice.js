import { createSlice } from '@reduxjs/toolkit'



export const preSeleccionSlice = createSlice({

    name: 'preSelecionados',

    initialState: {

        preElegidos: [],
    },
    reducers: {

        agregarPreSelec: (state, action) => {
            state.preElegidos = [...state.preElegidos, action.payload];
        },

        modificarPlaza: (state, action) => {
            const { indice, nuevaPlaza } = action.payload;

            state.preElegidos[indice].plaza = nuevaPlaza
        }

    }
})


export const plazasSlice = createSlice({

    name: 'misPlazas',

    initialState: {

        plazas: ["Perú (Agente Comercial)",
            "Canadá (Desarrollador web)",
            "Estados Unidos (Diseñador gráfico)",
            "España (Ingeniero de software)",
            "Argentina (Analista de datos)",
            "México (Periodista)",
            "Brasil (Chef)",
            "Francia (Arquitecto)",
            "Italia (Médico)",
            "Alemania (Profesor)"],
    },
    reducers: {

    }
});

export const { agregarPreSelec, modificarPlaza } = preSeleccionSlice.actions;
export const { } = plazasSlice.actions;










