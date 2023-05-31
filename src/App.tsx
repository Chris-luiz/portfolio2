import { BottomNavigation, Footer, Navbar } from "./components";
import { OqueEstouEstudando } from "./pages/OqueEstouEstuando";
import { Conhecimentos, Experiencias, Projetos, SobreMim } from "./pages";

function App() {
  return (
    <div className="App dark:bg-gray-900">
      <Navbar />
      <SobreMim />
      <Projetos />
      <Experiencias />
      <Conhecimentos />
      <OqueEstouEstudando />
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default App;
