import React from 'react'
import { useEffect , useState } from "react";
const prefix = "codepen-clone-"

const Storage = (key , initialValue) => {



    const prefixedkey = prefix + key

    
    const [value, setvalue] = useState(()=>{
        const jsonvalue = localStorage.getItem(prefixedkey)
        if (jsonvalue!=null) {
            return JSON.parse(jsonvalue)
        }

        if (typeof initialValue === 'function') {
            return initialValue()
        }
        else{
            return initialValue
        }
    })



    useEffect(() => {
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey,value])




return [value,setvalue]

}

export default Storage
