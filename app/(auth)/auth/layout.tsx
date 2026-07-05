import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex items-center justify-center h-screen flex-col bg-zinc-900'>
        {children}
    </main>
  )
}

export default AuthLayout;