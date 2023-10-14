import React from 'react'

export const Layout = ({ children, title = '' }) => {

    return (
        <div className='container m-auto w-full h-full  items-center bg-gray-100  ' >
            <h1 className='text-3xl text-center font-bold text-gray-700 py-3 mb-5 mt-14' >{title}</h1>
            <div className='grid lg:grid-cols-2 lg:grid-rows-2 container items-center content-center  mt-12 gap-2  '>

                {children}

            </div>
        </div>
    )
}
