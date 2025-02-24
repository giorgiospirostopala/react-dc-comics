import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const links = [
    { id: 1, text: "Pippo", url: "#", current: false },
    { id: 2, text: "Pluto", url: "#", current: false },
    { id: 3, text: "Qui", url: "#", current: false },
    { id: 4, text: "Quo", url: "#", current: false },
    { id: 5, text: "Qua", url: "#", current: false }
  ];

  return (
    <>
      <Header links={links} />
      <Main />
      <Footer />
    </>
  )
}

export default App;

