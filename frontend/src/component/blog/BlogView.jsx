
// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// 1-Constructor
// 2-Render
// 3-CDM

// CSS
import "./view.css"
import BlogApiServices from '../../services/BlogApiServices';
import { Link } from 'react-router-dom';

// CLASS Component
class BlogWiew extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_View";

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        //bind

        //state
        this.state = {
            id: this.props.match.params.id,

            // 1.YOL
            /*
            header:null,
            content:null,
            systemDate:null,
            */

            // 2.YOL
            blogDto: {},
        }

        //bind
    }

    // CDM
    componentDidMount() {
        BlogApiServices.blogServiceFindById(this.state.id).then(
            //response.data
            //response.status
            //response.statusText
            //response.AxiosHeaders
            //response.config
            (response) => {
                if (response.status == 200) {
                    console.log(response);
                    this.setState({
                        blogDto:response.data
                    })
                }
            }
        ).catch((error) => {
            console.error("View not Find: " + error);
            console.error( error);
            console.error( error.name);
            console.error( error.message);
        })
    }

    // FUNCTION

    //RENDER
    render() {

        //destructing
        const {id,blogDto}=this.state;
        const {header,content,systemDate}=blogDto;

        //RETURN
        return (
            <React.Fragment>
                <div className="specialCard">
                    <div className="card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone" />
                        <div className="card-body">
                            <h5 className="card-title text-center text-uppercase display-3">{id}</h5>
                            <p className="card-text text-center fw-bold text-uppercase">{header}</p>
                            <p className="card-text">{content} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque libero corrupti voluptatum reiciendis. Unde, sequi quisquam animi accusantium dolore pariatur nemo a fuga eveniet, architecto, quibusdam esse? Excepturi, error iure?
                            Minus eligendi dolore, totam eaque velit aliquam nihil accusamus quod. Animi vitae modi distinctio, cum, nulla perferendis maxime labore autem doloribus, atque laborum dolores eius architecto iure corrupti ad. Veritatis.
                            Laborum a voluptates placeat harum qui rerum voluptatibus aspernatur vero, magni ea illum voluptate commodi earum repudiandae non autem deserunt, ipsa temporibus expedita reprehenderit in ullam sapiente? Alias, est cumque.
                            Consequuntur, maxime officiis asperiores corporis distinctio sed ea commodi sunt. Eveniet explicabo neque provident animi magnam nihil labore totam omnis atque a quis libero nulla, quibusdam ducimus quidem saepe quisquam.
                            Quidem aliquid, laudantium dolorem omnis assumenda labore odio possimus veniam maiores ducimus quod! Hic perferendis suscipit consectetur vero quasi dicta minima eum rem quod, veniam nesciunt, laudantium quas, at culpa!</p>
                            <Link to="/" className="btn btn-primary text-center ms-4 mt-3">Button</Link>
                            <br /><br />
                            <p className="text-muted float-end">{systemDate}</p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(BlogWiew)