// rcc
import React, { Component } from 'react'

// Header, Main,Footer
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// i18n 
import { withTranslation } from 'react-i18next';

// CLASS Component
class RouterMain extends Component {

     // Componentteki yeni isim
   static displayName="Blog_Router"

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
            <>
                <Header/>
                <br />
                <Main/>
                <br />
                <Footer/>
            </>
        ) //end return
    } // end render
}//end clas



export default withTranslation()(RouterMain) 