//rfc => React Function Component.
//rcc => React Class Component.
//rsc => React Stateles Component (state olmayan).
import React from 'react';

//TR import edelim
//adı tr olsun
import tr from "../component/img/flag/tr.png"
import en from "../component/img/flag/en.png"

// Dil secenegi
import {withTranslation} from 'react-i18next';
import OtherLanguageServices from "./OtherLanguageServices";
import {Link} from 'react-router-dom';


//Funksiyon Component
function OtherLanguageReusability(props) {

    //Bayraklar
    const internationalizationLanguage = language => {
        const {i18n} = props;
        i18n.changeLanguage(language);

        //Hem java tarafından hemde frontend tarafından değişiklik yaptık.
        OtherLanguageServices.headerLanguageServices(language);
    }

    //render
    return (
        <React.Fragment>

                <li className="flag">
                    <Link className="nav-link" to="" onClick={() => internationalizationLanguage('tr')}>
                        <img src={tr} style={{height: "20px"}} alt="TR"/>
                    </Link>
                </li>
                <li className="flag">
                    <Link className="nav-link" to="" onClick={() => internationalizationLanguage('en')}>
                        <img src={en} style={{height: "15px"}} alt="EN"/></Link>
                </li>
          
        </React.Fragment>
    );
}

// export default UserRegister
// Higher Order Component: monad componenti başka bir componentin içine  ekleyip oradanda yeni sonuclar elde etmek
export default withTranslation()(OtherLanguageReusability)

