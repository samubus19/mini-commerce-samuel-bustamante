import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderApp } from './components/HeaderApp';
import { Home } from './views/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProductView } from './views/ProductView';
import { PurchaseView } from './views/PurchaseView';
import { ProductsView } from './views/ProductsView';

const App = () => {
  return (
    <>
      <HeaderApp/>
      <Switch>
        <Route path={"/"} component={Home} exact></Route>
        <Route path={"/product/:id"} component={ProductView} exact></Route>
        <Route path={"/products/:category"} component={ProductsView} exact></Route>
        <Route path={"/purchase"} component={PurchaseView} exact></Route>
        <Route render={() => <Redirect to={"/"}/>}></Route>
      </Switch>
    </>
  );
}

export default App;
