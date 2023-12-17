import React from 'react';

const Header = ({ totalUnread, markAllRead }) => {
  return (
    <section className="flex justify-between">
      <span className="flex gap-3 md:gap-6 items-center">
        <h1 className="text-lg md:text-2xl font-bold">Notifications</h1>
        <button className="bg-blueyBlue text-white px-2 md:px-4 rounded-md text-base md:text-lg font-bold">
          {totalUnread}
        </button>
      </span>
      <button
        className="text-lightTextGray cursor-pointer hover:underline"
        onClick={markAllRead}
      >
        Mark all as read
      </button>
    </section>
  );
};

export default Header;
