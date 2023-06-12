// rcc
import React, { Component } from 'react'

// Header, Main,Footer
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// i18n 
import { withTranslation } from 'react-i18next';

// HashRouter => Production için kullanın
// HashRouter:Backtentten gidecek veya geolecek trafiği kapatıyorum kendimi güvence altına alıyorum
// HashRouter as Router URL=>(http://localhost:3000/#/)
// BrowserRouter => Test için
// BrowserRouter: backent içiin network'u bütün detayına kadar bana göster
// BrowserRouter as Router URL=>(http://localhost:3000/)
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom"

// CLASS Component
class RouterMain extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_Router"

    constructor(props) {
        super(props);

        //bind

        //state
        this.state = {}

        //bind
    }

    // CDM
    componentDidMount() { }

    // FUNCTION

    //RENDER
    render() {

        //RETURN
        return (
            // <div>Header</div>
            //<React.Fragment>Header</React.Fragment>
            <React.Fragment>
                <Router>
                    <Header logo="fa-solid fa-blog" homePageLink="http://localhost:3000/index" />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Main}></Route>
                            <Route path="/index" component={Main}></Route>

                            <Route path="/blog/list" component={Main}></Route>
                            <Route path="/blog/create" component={Main}></Route>
                            <Route path="/blog/update/:id" component={Main}></Route>
                            <Route path="/blog/view/:id" component={Main}></Route>
                            {/* eğer kullanıcı bad request atarsa(400) ana sayfaya yönlendirsin */}
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <Footer copy="&copy; Bütün haklar Saklıdır." />
                </Router>

            </React.Fragment>
        ) //end return
    } // end render
}//end clas

export default withTranslation()(RouterMain) 