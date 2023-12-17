import "./styles/local.css"
import Header from "./components/Header";

const App = () => {
  return (
    <section className="App bg-backgroundColor w-full h-screen flex justify-center items-center">
      <section className="w-2/3 bg-white px-7 py-10 rounded-xl">
        <Header />
      </section>
    </section>
  );
}

export default App;
