import { PROVIDER } from './Context/store';
import Layout from './Layout/index';
import RouterSetup from "./Route";
import {BrowserRouter as Router} from 'react-router-dom'
import "./styles/global.scss";
function App() {

  return (
    <>
    <Router>

    <PROVIDER>
    
      <Layout>
        <RouterSetup />
      </Layout>
    </PROVIDER>
    </Router>
    </>
  );
}

export default App;
