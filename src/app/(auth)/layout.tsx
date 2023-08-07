import {ReactNode, FC} from 'react'

interface AuthlayoutProps{
    children:ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({children}) => {
  return (
    <div className='flex justify-center  items-center w-full h-screen  '>
      {children}
    </div>
  )
}

export default Authlayout
