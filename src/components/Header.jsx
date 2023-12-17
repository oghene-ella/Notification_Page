import React from 'react'

const Header = () => {
  return (
    <section className='flex justify-between'>
        <span className='flex gap-6 items-center'>
            <h1 className='text-2xl font-bold'>Notification</h1>
            <button className='bg-blueyBlue text-white px-4 rounded-md text-lg font-bold'>3</button>
        </span>
        <p className='text-lightTextGray'>Mark all as read</p>
    </section>
  )
}

export default Header