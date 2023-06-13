// rcc
import React, { Component } from 'react'

// i18n 
import { withTranslation } from 'react-i18next';

// Create Css
import "./create.css"
import ResuabilityBlogInput from './ResuabilityBlogInput';
import BlogApiServices from '../../services/BlogApiServices';

// CLASS Component
class BlogCreate extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_Create";

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        //state
        this.state = {
            header: null,
            content: null,
            blogDto: {},
            // isRead
            // SpinnerData
            // Validation
            // Multiple Request engellemek
        }

        //bind
        this.blogCreateSubmit = this.blogCreateSubmit.bind(this);
        this.onChangeInputValue = this.onChangeInputValue.bind(this);
    }

    // CDM
    componentDidMount() { }

    // FUNCTION
    // ONCHANGE 
    onChangeInputValue = (event) => {
        console.log(event)
        // 1. YOL (TARGET)
        //const eventTargetName = event.target.name;
        //const eventTargetValue = event.target.value;
        //console.log(`NAME: ${eventTargetName} VALUE: ${eventTargetValue}`)

        // 2.YOL (TARGET)
        const { name, value } = event.target;
        console.log(`NAME: ${name} VALUE: ${value}`)

        //STATE
        this.setState({
            // 2.YOL
            [name]: value,
        })
    } // end onChangeInputValue


    // SUBMIT
    blogCreateSubmit = async (event) => {
        // Browser sen dur birşey yapma
        event.preventDefault();

        // object Destructing
        const { header, content } = this.state;

        // 1.YOL
        const blogDto = {
            //1.YOL
            //header:header,
            //content:this.state.content,

            // 2.YOL key:value aynı değerse bir tane yaz
            header, content
        }

        // 1.YOL (Promise)
        // BlogApiServices.blogServiceCreate(blogDto).then(
        //     (response)=>{
        //         if(response.status==200){
        //             console.log(response.data)
        //         }
        //     }
        // ).catch((err)=>console.error(err))

        // 2.YOL(Async Await)
        try {
            const response = await BlogApiServices.blogServiceCreate(blogDto);
            if(response.status==200){
                // PHP
                this.props.history.push("/blog/list")
            }
        } catch (err) {
            console.error(err)
        }
    } //end blogCreateSubmit

    //RENDER
    render() {
        // 'blog_header':'Blog Header',
        // 'blog_content':'Blog Content',
        //RETURN
        return (
            <React.Fragment>
                <h2 className="display-3 text-center text-uppercase shadow mt-5 mb-3 p-4">Blog Create</h2>
                <form className="create_form" method='post' autoComplete='true'>
                    {/* Header input */}
                    {/* <div className="form-outline">
                        <label className="form-label" htmlFor="header">{this.props.t('blog_header')} </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="header" 
                        name="header"
                        placeholder={this.props.t('blog_header')}
                        autoFocus={true}
                        required="true"
                        onChange={this.onChangeInputValue} />
                        <div className="is-invalid text-danger form-control44">Adı boş geçtiniz</div>
                    </div> */}
                    {/* label, type, className, id, name, placeholder, isAutoFocus, required, inputOnChange, error */}
                    <ResuabilityBlogInput
                        label={this.props.t('blog_header')}
                        type="text"
                        className="form-control"
                        id="header"
                        name="header"
                        placeholder={this.props.t('blog_header')}
                        isAutoFocus={true}
                        isRequired="true"
                        isInputOnChange={this.onChangeInputValue}
                        error="Header alanı boş geçildi"
                    />
                    {/* Content input */}
                    <div className="form-outline">
                        <label className="form-label" htmlFor="header">{this.props.t('blog_content')} </label>
                        <textarea
                            className="form-control"
                            id="content"
                            name="content"
                            placeholder={this.props.t('blog_content')}
                            autoFocus={false}
                            required="true"
                            onChange={this.onChangeInputValue} rows="4" />
                        <div className="is-invalid text-danger form-control44">içerik boş geçtiniz</div>
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
                            Lütfen öncelikle okuyun ve onaylayın.
                        </label>
                    </div>
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        onClick={this.blogCreateSubmit}>
                        {this.props.t('submit')}
                    </button>
                </form>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogCreate)