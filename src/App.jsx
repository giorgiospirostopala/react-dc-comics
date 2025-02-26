import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// ex.3
// import Card from "./components/Card";
// import comics from "./data/comics";

function App() {
  const links = [
    { id: 1, text: "Pippo", url: "#", current: false },
    { id: 2, text: "Pluto", url: "#", current: false },
    { id: 3, text: "Qui", url: "#", current: false },
    { id: 4, text: "Quo", url: "#", current: false },
    { id: 5, text: "Qua", url: "#", current: false }
  ];

  // const card = comics;

  return (
    <>
      <Header links={links} />
      <Main />
      {/* <Card
        title={card.title}
        image={card.thumb}
        description={card.description}
        price={card.price}
      /> */}
      <Footer />
    </>
  );
}

export default App;

