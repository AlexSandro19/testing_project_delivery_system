import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPage"
import RegistrationPage from "./pages/RegistrationPage";
import AddPackage from "./pages/AddPackage";
import AddDelivery from "./pages/AddDelivery";
import ProfilePage from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import ViewOrdersPage from "./pages/ViewOrders";
const Routes=({successful})=>{
    if(successful){
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

<Route path="/profile" exact><ProfilePage/></Route>
<Route path="/register" exact><RegistrationPage /></Route>
<Route path="/addPackage" exact><AddPackage /></Route>
<Route path="/addDelivery" exact><AddDelivery /></Route>
<Route path="/updateProfile" exact><UpdateProfile /></Route>
<Route path="/viewOrders" exact><ViewOrdersPage /></Route>

            <Redirect to="/profile" ></Redirect>
        </Switch>
)
    }else{
    return(
      <Switch> 
      <Route path="/" exact><AuthPage/> </Route>
      <Route path="/register" exact><RegistrationPage /></Route>
      <Redirect to="/" ></Redirect>
      </Switch>
    )

    }
  
}
const mapStateToProps = (state) => ({
    //currentItem: state.items.currentItem
    successful:state.auth.successful
  });
  
 export default connect(mapStateToProps)(Routes);
