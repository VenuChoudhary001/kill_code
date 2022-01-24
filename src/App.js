import Layout from "./Components/Layout/layout";
import Home from "./pages/Home_Page/home";
import Registration from "./pages/Registration/registration";
import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Registration />
      </Layout>
    </div>
  );
}

export default App;
