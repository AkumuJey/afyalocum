import { useEffect, useState } from "react"
import { Box } from "@mui/material"

interface Props{
    id: number,
}
const SingleLocum = ({id}: Props) => {
    const [locums, setLocums] = useState([])
    const abortController = new AbortController()
    const signal = abortController.signal
    const getData = async() => {
        const details = await fetch(`xyz${id}`, {signal}).then(response => response.json())
        return details
    } 
    useEffect(() => {
        const data = getData()
        if (data){
            setLocums(data)
        }
        return abortController.abort()
    })
  return (
    <>
    <Box component={`div`}>
        <h1>{`Location ${id}`}</h1>
        <p>{data?.name}</p>
    </Box>
    </>
  )
}

export default SingleLocum