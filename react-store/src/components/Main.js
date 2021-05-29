import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"

import AppsContainer from "./AppsContainer";
import Controlto from './Controlto'

const Main = () => {
    return(
        <Router>
            <main>
                <section className="controlItemContainer">
                    {navControls.map((item) => {
                        return (
                            <Controlto info = {item}/>
                        )
                    })}
                </section>
                <article className="subAppContainer">
                    {AppsContainer.map(
                        (item, index) => {
                            return(
                                <Route
                                    exact
                                    path={navControls[index].href}
                                    component={item}
                                />
                            )
                        }
                    )}
                </article>
            </main>
        </Router>
    )
};

const navControls = [
    {
        text: "Home",
        href: "/home"
    },
    {
        text: "Products",
        href: "/products"
    },
    {
        text: "Sell",
        href: "/sell"
    },
    {
        text: "Contact",
        href: "/contact"
    },
    {
        text: "Statistics",
        href: "/statistics"
    }
];



export default Main