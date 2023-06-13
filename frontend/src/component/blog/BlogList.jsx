
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

        //state
        this.state = {
            blogList: [],
        }

        // bind
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.view = this.view.bind(this);
        this.delete = this.delete.bind(this);
    }

    // CDM (Promise)
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
    // PHP CREATE
    create() {
        this.props.history.push("/blog/create");
    }

    // PHP UPDATE(id)
    update(id) {
        this.props.history.push("/blog/update/" + id);
    }

    // PHP VIEW(id)
    view(id) {
        this.props.history.push(`/blog/view/${id}`);
    }

    // PHP DELETE(id)
    delete(id) {
        BlogApiServices.blogServiceDeleteById(id).then(
            (response) => {
                this.setState({
                    blogList: this.state.blogList.filter(
                        blogList => blogList.id != id
                    )//end filter
                })// end setState
            }// end response
        ).catch(error => {
            console.error("Blog Delete Failed: " + error)
        })
    }

    //RENDER
    render() {
  
        // PROPS
        const { t } = this.props;

        //RETURN
        return (
            <React.Fragment>
                <h1 className="text-center text-primary display-5 text-uppercase"> {this.props.t('blog')}</h1>
                {/* Create Button Blog */}
                <button
                    className="btn btn-primary"
                    onClick={this.create}         // 1.YOL
                    //onClick={()=>this.create()} // 2.YOL
                    style={{ marginRight: "1rem" }}>
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
                                    {/* UPDATE */}
                                    <td>
                                        <i
                                            class="fa-solid fa-pen-to-square text-primary"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => this.update(blog.id)} ></i>
                                    </td>

                                    {/* VIEW */}
                                    <td>
                                        <i
                                            class="fa-solid fa-binoculars text-dark"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => this.view(blog.id)}></i>
                                    </td>

                                    {/* DELETE */}
                                    <td>
                                        <i
                                            class="fa-solid fa-trash text-danger"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                if (window.confirm(blog.id + " ID Blog silmek istiyor musunuz ?"))
                                                    this.delete(blog.id)
                                                else
                                                    window.alert("Silinmedi !!!");
                                            } //end function
                                          }></i>
                                    </td>
                                </tr>) // end map
                        }
                    </tbody>
                </table>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogList)