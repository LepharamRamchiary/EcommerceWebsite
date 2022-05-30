// import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ProductList from './containers/ProductList';
import ProductDe from './containers/ProductDe';


function App() {
  return (
    <div className="App">
      
      <Router>
         <Header />
         <Routes>
         <Route exact  path="/" element={<ProductList/>} />
         <Route exact path="/product/:productId"  element={<ProductDe/>} />
         <Route>404 Not Found!</Route>
         </Routes>
     </Router>
    
    </div>
  );
}

export default App;
