import React from 'react';
import peopleData from "../data";

const Header = () => {
  let totalUnread = 0;

  peopleData.forEach(person => {
    if (person.status === 'unread') {
      totalUnread++;
    }
  });

  return (
    <section className='flex justify-between'>
      <span className='flex gap-3 md:gap-6 items-center'>
        <h1 className='text-lg md:text-2xl font-bold'>Notifications</h1>
        <button className='bg-blueyBlue text-white px-2 md:px-4 rounded-md text-base md:text-lg font-bold'>
          {totalUnread}
        </button>
      </span>
      <p className='text-lightTextGray cursor-pointer hover:underline'>Mark all as read</p>
    </section>
  );
};

export default Header;