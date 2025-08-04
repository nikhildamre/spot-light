import { SignIn } from '@clerk/nextjs'
import ClerkDebug from '@/components/ClerkDebug'
import React from 'react'

const Signin = () => {
  return (
    <div className="w-full">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-slate-800 shadow-xl",
          }
        }}
      />
      <ClerkDebug />
    </div>
  )
}

export default Signin
