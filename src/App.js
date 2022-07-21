import Nav from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Shop from "./LinkPage/Shop";
import ShopDetails from "./ShopDetails";
import NewItem from "./NewItem";
import Shop1 from "./LinkPage/Shop1";
import ShopDetails1 from "./ShopDetails1";
import Login from "./LoginFloder/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="Content">
          <Switch>
            
            <Route exact path="/shop">
              <Shop1 />
            </Route>
            <Route path="/shop/:id">
              {/* <ShopDetails /> */}
              <ShopDetails1 />
            </Route>
            <Route path="/new-item">
              <NewItem />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
