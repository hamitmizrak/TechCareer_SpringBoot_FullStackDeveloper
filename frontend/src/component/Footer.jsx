// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// CLASS Component
class Footer extends Component {

    // Componentteki yeni isim
    static displayName="Blog_Footer";

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
            // <div>Footer</div>
            //<React.Fragment>Footer</React.Fragment>
            <>
            {/* footer start */}
            <footer id="footer_id">
              <section id="footer_contact">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-sm-12">
                      <h3 className="text-uppercase">Contact</h3>
                      {/* fa-sm fa-lg fa-xl fa-2xl */}
                      <div className="d-grid gap-4">
                        <p>
                          {" "}
                          <i className="fas fa-home me-3 text-secondary" /> Malatya /
                          TÜRKİYE
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-envelope me-3 text-secondary" />
                          info@example.com
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567
                          88
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-print me-3 text-secondary" /> + 01 234 567
                          89
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <h3 className="text-uppercase">Company INC</h3>
                      <p className="line-clamp8">
                        Company Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quis impedit accusamus reprehenderit possimus dolores quidem culpa
                        omnis, recusandae asperiores hic architecto ratione assumenda,
                        quam beatae cupiditate enim voluptatum, et iste? Quo ratione iure
                        debitis, quis possimus atque repellendus at tempore officia.
                        Commodi, perspiciatis consectetur provident numquam fugiat,
                        excepturi temporibus quasi, molestias unde voluptate animi ab
                        quisquam aperiam vitae maxime magni!
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <h3 className="text-uppercase">Email</h3>
                      <form action="#" id="form_email">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Konu"
                          required=""
                        />
                        {/*autofocus */}
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Mail adresiniz"
                          required=""
                        />
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Email Konusu ..."
                          defaultValue={""}
                        />
                        <button type="reset" className="btn btn-danger mt-3">
                          Temizle
                        </button>
                        <button type="submit" className="btn btn-primary mt-3">
                          Email Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </footer>
            <section
              className="text-center bg-dark text-white fixed-bottom44"
              id="footer_copy_right"
            >
              <div className="container-fluid">
                2021- <span id="footer_date" onDoubleClick="footer_date_hide()" /> {this.props.copy} <a href="#">Design and codes By Hamit Mızrak</a>
              </div>
            </section>
            {/* footer end */}
            {/* backtop */}
            <a id="back_top" href="#no_script" className="btn btn-primary">
              <i className="fa-solid fa-arrow-up" style={{ marginLeft: "-.7rem" }} />
            </a>
          </>
          
        ) //end return
    } // end render
}//end clas

// export default Footer
// i18n Wrapper
export default withTranslation()(Footer)