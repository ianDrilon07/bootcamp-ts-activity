import { Dispatch, SetStateAction } from "react"

export type PetsObject = {
    name: string,
    age?: number,
    owner?: string
}


export type toggleButtonTypes = { 
    buttonText: string,
    state: SetStateAction<boolean>,
    setState: Dispatch<SetStateAction<boolean>>
}