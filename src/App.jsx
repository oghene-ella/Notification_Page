import "./styles/local.css"
import Header from "./components/Header";
import People from "./components/People";
import peopleData from "./data";

const App = () => {
  const PeopleData = peopleData;

	const peopleLength = PeopleData.length;

  return (
    <section className="App bg-backgroundColor w-full md:h-screen flex justify-center items-center">
      <section className="w-full md:w-2/3 bg-white p-5 md:px-7 md:py-10 rounded-xl flex flex-col gap-6">
        <Header/>
        <People peopleLength={peopleLength} PeopleData={PeopleData}/>
      </section>
    </section>
  );
}

export default App;
