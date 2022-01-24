import Layout from "./Components/Layout/layout";
import Home from "./pages/Home_Page/home";
import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
