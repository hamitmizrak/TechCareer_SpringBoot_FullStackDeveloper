
// rcc
import React, { Component } from 'react'

// i18n
import { withTranslation } from 'react-i18next';

// Blog Api Services
import BlogApiServices from '../../services/BlogApiServices';

// CLASS Component
class BlogList extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_List";

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        //bind

        //state
        this.state = {
            blogList: [],
        }

        //bind
    }

    // CDM
    componentDidMount() {
        BlogApiServices.blogServiceList().then(
            (response) => {
                this.setState({
                    blogList: response.data
                }); // end setState 
            }
        ).catch((error) => {
            console.error("List Failed: " + error)
        });
    }

    // FUNCTION

    //RENDER
    render() {

        //RETURN
        return (
            <React.Fragment>
                <h1 className="text-center text-primary display-5 text-uppercase"><i class="fa-solid fa-circle-plus"></i> Create</h1>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>HEADER</th>
                            <th>CONTENT</th>
                            <th>DATE</th>
                            <th>Update</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>HEADER-1</td>
                            <td>CONTENT-1</td>
                            <td>DATE-1</td>
                            <td><i class="fa-solid fa-pen-to-square text-primary"></i></td>
                            <td><i class="fa-solid fa-binoculars text-dark"></i></td>
                            <td><i class="fa-solid fa-trash text-danger"></i></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogList)