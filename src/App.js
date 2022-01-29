import { PROVIDER } from './Context/store';
import Layout from './Layout/index';
import RouterSetup from "./Route";

import "./styles/global.scss";
function App() {
  return (
    <>
    <PROVIDER>

      <Layout>
        <RouterSetup />
      </Layout>
    </PROVIDER>
    </>
  );
}

export default App;
