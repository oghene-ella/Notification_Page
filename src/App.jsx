import "./styles/local.css"
import React, { useState } from 'react';
import Header from "./components/Header";
import People from "./components/People";
import peopleData from './data';

const App = () => {
  const [peopleDataState, setPeopleData] = useState(peopleData);

  const markAllRead = () => {
    const updatedPeopleData = peopleDataState.map(person => {
      if (person.status === 'unread') {
        return { ...person, status: 'read' };
      }
      return person;
    });
    setPeopleData(updatedPeopleData);
  };

  return (
    <section className="App bg-backgroundColor w-full md:h-screen flex justify-center items-center">
      <section className="w-full md:w-2/3 bg-white p-5 md:px-7 md:py-10 rounded-xl flex flex-col gap-6">
        <Header
          totalUnread={peopleDataState.filter(person => person.status === 'unread').length}
          markAllRead={markAllRead}
        />
        <People peopleData={peopleDataState} />
      </section>
    </section>
  );
};

export default App;

