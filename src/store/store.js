import { configureStore } from '@reduxjs/toolkit'
import { plazasSlice, preSeleccionSlice, } from './miSlice'

export default configureStore({
    reducer: {
        preSelecionados: preSeleccionSlice.reducer,
        misPlazas: plazasSlice.reducer
    },
})