import Navbar from "./components/Layout/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let nombre = "Paula";

  return (
    <main>
      <Navbar />
      <ItemListContainer nombre={nombre} />
    </main>
  );
}

export default App;
