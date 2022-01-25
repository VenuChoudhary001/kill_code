import Layout from "./Components/Layout/layout";
import RouterSetup from "./Route";

import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <Layout>
        <RouterSetup />
      </Layout>
    </div>
  );
}

export default App;
