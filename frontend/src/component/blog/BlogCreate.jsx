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
            isRead: false,
            spinnerData: false, // spinner data çalıştırmak
            multipleRequest: false, // Çoklu istekleri kapatmak
            validationErrors: {} // backendten gelen hataları handle yapmak
        }

        //bind
        this.blogCreateSubmit = this.blogCreateSubmit.bind(this);
        this.onChangeInputValue = this.onChangeInputValue.bind(this);
        this.onChangeIsRead = this.onChangeIsRead.bind(this);
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

        // Backenten gelen hataları kapat
        const backendHandleError = { ...this.state.validationErrors }
        backendHandleError[name] = undefined;

        //STATE
        this.setState({
            // 2.YOL
            [name]: value,
            backendHandleError, // state datadan gelen backent dataları almak
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
            //Spinner
            this.setState({
                spinnerData: true,
                multipleRequest: false,
            });
            const response = await BlogApiServices.blogServiceCreate(blogDto);
            if (response.status == 200) {
                this.setState({
                    multipleRequest: true,
                });
                // PHP
                this.props.history.push("/blog/list")
            }
        } catch (err) {
            console.error(err);
            //Spinner
            this.setState({ spinnerData: true });
            // backend gelen hatalar varsa, yakala
            const backendError = err.response.data.validationErrors;
            if (backendError) {
                this.setState({
                    validationErrors: backendError
                })
                console.log(backendError)
            }
            //Spinner
            this.setState({ spinnerData: false, multipleRequest: false, });
        }

    } //end blogCreateSubmit

    // OKUMUŞ MU
    onChangeIsRead = (event) => {
        // CONSOLE
        console.log(event.target.checked)

        this.setState({
            isRead: event.target.checked,
        })
    }  //end onChangeIsRead

    //RENDER
    render() {
        // object Destructing(props)
        const { t } = this.props;

        // object Destructing(state)
        const { validationErrors, isRead, spinnerData, multipleRequest } = this.state;
        const { header, content } = validationErrors;

        // Submit button Variable
        const submitButton = (
            <button
                className="btn btn-primary btn-block mb-4"
                onClick={this.blogCreateSubmit}
                disabled={(!isRead) || (spinnerData)}
            >
                {/* 1.YOL Spinner */}
                {/* {(this.state.spinnerData) ? <span style={{}} className="spinner-border" role="status"> </span> : ""} */}
                {/* 2.YOL Spinner */}
                {(spinnerData) && <span style={{}} className="spinner-border spinner-border-sm" role="status"> </span>}
                {t('submit')}
            </button>
        );

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
                        placeholder={t('blog_header')}
                        isAutoFocus={true}
                        isRequired="true"
                        isInputOnChange={this.onChangeInputValue}
                        error={header}
                    />
                    {/* Content input */}
                    <div className="form-outline">
                        <label className="form-label" htmlFor="header">{t('blog_content')} </label>
                        <textarea
                            className="form-control"
                            id="content"
                            name="content"
                            placeholder={t('blog_content')}
                            autoFocus={false}
                            required="true"
                            error={content}
                            onChange={this.onChangeInputValue} rows="4" />
                        <div className="is-invalid text-danger form-control44">{content}</div>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="isRead"
                            name="isRead"
                            onChange={this.onChangeIsRead}
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form4Example4">
                            {this.props.t('user_blog_is_read')}
                        </label>
                    </div>
                    {/* Submit button */}
                    {submitButton}
                </form>
            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogCreate)