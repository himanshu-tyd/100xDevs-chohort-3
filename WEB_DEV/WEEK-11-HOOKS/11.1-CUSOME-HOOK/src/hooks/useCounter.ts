import { useState } from "react"



export const useCounter=()=>{
    

    const [counter, setCouter]=useState(0)

    const increase=()=>{
        setCouter(pre=>pre+1)
    }


    return {counter, increase}

}