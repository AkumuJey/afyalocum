import { CircularProgress } from '@mui/material'


const LoadingPage = () => {
  return (
    <div className='flex justify-center items-center valid-height w-full py-[4rem]'>
        <CircularProgress size={50}/>
    </div>
  )
}

export default LoadingPage