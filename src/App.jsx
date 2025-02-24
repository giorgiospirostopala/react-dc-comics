import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const links = [
    { text: "Pippo", url: "#" },
    { text: "Pluto", url: "#" },
    { text: "Qui", url: "#" },
    { text: "Quo", url: "#" },
    { text: "Qua", url: "#" }
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

