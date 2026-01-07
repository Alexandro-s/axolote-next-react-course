'use client'

import ErrorMsg from "@/components/ErrorMsg"
import { useEffect } from "react"

type RootErrorPageProps = {
    error : Error
    reset : () => void
}


export default function RootErrorPage ({error,} : RootErrorPageProps ) {

useEffect(() => {
console.log(error);
}, [error])



    return (

   <ErrorMsg pageTitle="Internal Error Server" contentPage="501"
    content="Ocorreu um erro grave, tente novamente mais tarde." />
         )

}

