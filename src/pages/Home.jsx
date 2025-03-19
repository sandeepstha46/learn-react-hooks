import React from 'react'
import UseState from "../hooks/UseState.jsx";

export default function Home() {
    return (
        <>
            <h4 className='mb-0'>React Built-in Hooks</h4>
            <p className='pt-4 mb-0 opacity-75'>
                React Hooks are available from React 16.8 versions. Before, in class component we have to write our own logics and there was no available of hooks concept. Now, it has made easier with react hooks. we have following built in react hooks.
            </p>

            <hr className='my-4' />

            <UseState />

            <hr className='my-4' />
        </>
    )
}