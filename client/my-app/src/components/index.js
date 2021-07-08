import React from 'react'
import {use} from 'react'
import {useState} from 'react'
import React, { useEffect, useState } from 'react'


export const Hello = ()=> {
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        fetch('/api/').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    }, [])
    console.log(initialState)
    return(<div> 
        {initialState.length > 0 && initialState.map(e => <li>{e} </li>)}
    </div>)
}