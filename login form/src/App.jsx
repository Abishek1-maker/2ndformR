import React from 'react'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <header className='bg-gray-800 text-white p-4'>
        <h1 className='text-2xl flex justify-center'>Welcome to My App</h1>
        <p className='text-xl flex justify-center'>This is using react for Form</p>
 </header>
 <main>
 <Signup/>
 </main>
 <footer className='bg-amber-950 text-white text-2xl'>
  @copyright 2025
 </footer>
    </>
  )
}

export default App
