import Intro from "./components/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext} from "./context";
import { useContext } from "react";

const App = () => {

const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

  return ( 
  <div 
  style={{
    backgroundColor:darkMode ? "#000" : "#fff", 
    color: darkMode && "#fff",
    }}
    > 
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;