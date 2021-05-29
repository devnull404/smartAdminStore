import Home from './apps/Home'
import ProductsContainer from './apps/ProductsContainer'
import Sell from './apps/Sell'
import Contact from './apps/Contact'
import Statistics from './apps/Statistics'

// Uncomentar para pasar los elementos del array como React Elements.
// const AppsContainer = [<Home/>, <Products/>, <Sell/>, <Contact/>, <Statistics/>];

// O uncomentar lo siguiente para pasar los elementos del array como funciones y po-
// der llamarlas en el código donde así se necesite.
const AppsContainer = [Home, ProductsContainer, Sell, Contact, Statistics];

export default AppsContainer