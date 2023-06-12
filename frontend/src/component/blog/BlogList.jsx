
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
        // 'date':"System Created Date",
        // 'create':"Create",
        // 'delete':"Delete",
        // 'update':"Update",
        // 'view':"View",
        // 'blog':"Blog",
        // 'blog_id':"Blog ID",
        // 'blog_header':'Blog Header',
        // 'blog_content':'Blog Content',

        const { t } = this.props;

        //RETURN
        return (
            <React.Fragment>
                <h1 className="text-center text-primary display-5 text-uppercase"> {this.props.t('blog')}</h1>
                {/* Create Button Blog */}
                <button className="btn btn-primary" style={{ marginRight: "1rem" }}>
                    <i class="fa-solid fa-circle-plus me-3"></i>
                    {this.props.t('create')}
                </button>

                {/* Delete All Button Blog */}
                <button className="btn btn-danger">
                    <i class="fa-solid fa-trash text-light me-3"></i>
                    {this.props.t('delete')}
                </button>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>{this.props.t('blog_id')}</th>
                            <th>{this.props.t('blog_header')}</th>
                            <th>{this.props.t('blog_content')}</th>
                            <th>{t('date')}</th>
                            <th>{t('update')}</th>
                            <th>{t('view')}</th>
                            <th>{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.blogList.map((blog) =>
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.header}</td>
                                    <td>{blog.content}</td>
                                    <td>{blog.systemDate}</td>
                                    <td><i class="fa-solid fa-pen-to-square text-primary"></i></td>
                                    <td><i class="fa-solid fa-binoculars text-dark"></i></td>
                                    <td><i class="fa-solid fa-trash text-danger"></i></td>
                                </tr>) // end map
                        } //end JS
                    </tbody>
                </table>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogList)