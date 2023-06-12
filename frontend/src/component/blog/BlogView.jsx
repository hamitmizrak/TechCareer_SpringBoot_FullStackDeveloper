
// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// CLASS Component
class BlogWiew extends Component {

    // Componentteki yeni isim
    static displayName="Blog_View";

    // CONSTRUCTOR
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
            <React.Fragment>
                BlogVİEW
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogWiew)