import React from 'react'
import { useReducer } from 'react'

export default function page() {

    const reducer = (state, action) => {
        switch(action.typr){
            case ''
        }
    }

   const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
   <>
<button onClick={() => dispatch({type: 'Increament'})}>Test</button>
   </>
  )
}
