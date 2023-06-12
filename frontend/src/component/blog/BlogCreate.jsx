// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// Create Css
import "./create.css"

// CLASS Component
class BlogCreate extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_Create";

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
                <h2 className="display-3 text-center text-uppercase shadow mt-5 mb-3 p-4">Blog Create</h2>
                <form className="create_form">
                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example1">
                            Name
                        </label>
                        <input type="text" id="form4Example1" className="form-control" />
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                            Email address
                        </label>
                        <input type="email" id="form4Example2" className="form-control" />
                    </div>
                    {/* Message input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example3">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="form4Example3"
                            rows={4}
                            defaultValue={""}
                        />
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form4Example4"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form4Example4">
                            Send me a copy of this message
                        </label>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                        Send
                    </button>
                </form>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogCreate)