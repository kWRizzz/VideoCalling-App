import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div
      className=' h-screen bg-slate-700 flex justify-center items-center'
    > 
      <SignedOut>
        <SignInButton
          mode='modal'
        />
      </SignedOut>

      <SignedIn>
          <SignOutButton/>
      </SignedIn>

      <UserButton/>
    </div>
  )
}

export default App