import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPage"
const Routes=({currentItem})=>{
    return(
        <Switch>
            {/*<Route path="/" exact><HomePage/> </Route>
            <Route path="/allitems" exact><ShoppingPage/> </Route>
            <Route path="/addToCart" exact></Route>
            <Route path="/item" exact><ItemPage currentItem={currentItem}/></Route>
            <Route path="/register" exact><RegistrationPage /></Route>
            <Route path="/profile" exact><ProfilePage /></Route>
            <Route path="/editItem/" exact><EditItemPage ></EditItemPage></Route>
            <Route path="/editOrder/" exact></Route>
            <Route path="/viewOrder/" exact></Route>
            <Route path="/contact" exact><ContactForm/> </Route>
            <Route path="/basket" exact><BasketPage/></Route>
            <Route path="/updateItem" exact><FormPage/></Route>
            <Route path="/modeling" exact><Modeling/></Route>}
            {/*<Route path="/modeling" render={() => <Redirect
        to={{
          pathname: "index.html"
        }}
      />}/>*/
      
      }

<   Route path="/" exact><AuthPage/> </Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    )
}
const mapStateToProps = (state) => ({
    //currentItem: state.items.currentItem
  });
  
 export default connect(mapStateToProps)(Routes);
