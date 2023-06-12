// rcc
import React, { Component } from 'react'

// css
import './style.css'

// i18n
import { withTranslation } from 'react-i18next';

// CLASS Component
class Main extends Component {

    // Componentteki yeni isim
    static displayName = "Blog_Main";

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
            // <div>Main</div>
            //<React.Fragment>Main</React.Fragment>
                <>
                    {/* main start */}
                    <main id="main_id">
                        {/* start section Çalışmalarımız */}
                        <section
                            id="studies"
                            className="wow animate__bounceInDown"
                            data-wow-delay="0.50s"
                        >
                            <h2 className="my_heading">Çalışmalarımız</h2>
                            <div className="container">
                                <div className="row">
                                    {/* 1.icon */}
                                    <div className="col-md-4 col-xl-4 text-center">
                                        {/* fa-sm fa-lg fa-xl fa-2xl */}
                                        <i className="fa-solid fa-camera-retro studies_icon" />
                                        <h4 className="text-dark">Frontend</h4>
                                        <p className="line-clamp4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Temporibus molestiae nesciunt dignissimos voluptatum dolorem
                                            repellat non voluptate optio quisquam facilis!
                                        </p>
                                        <a href="">More</a>
                                    </div>
                                    {/* 2.icon */}
                                    <div className="col-md-4 col-xl-4 text-center">
                                        {/* fa-sm fa-lg fa-xl fa-2xl */}
                                        <i className="fa-solid fa-sliders studies_icon" />
                                        <h4 className="text-dark">Backend</h4>
                                        <p className="line-clamp4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Temporibus molestiae nesciunt dignissimos voluptatum dolorem
                                            repellat non voluptate optio quisquam facilis!
                                        </p>
                                        <a href="">More</a>
                                    </div>
                                    {/* 3.icon */}
                                    <div className="col-md-4 col-xl-4 text-center">
                                        {/* fa-sm fa-lg fa-xl fa-2xl */}
                                        <i className="fa-solid fa-database studies_icon" />
                                        <h4 className="text-dark">Database</h4>
                                        <p className="line-clamp4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Temporibus molestiae nesciunt dignissimos voluptatum dolorem
                                            repellat non voluptate optio quisquam facilis!
                                        </p>
                                        <a href="">More</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end section Çalışmalarımız */}
                        {/* start section Başarılar */}
                        <section id="performance" className="wow fadeIn">
                            <div className="container">
                                <div className="performance-header">
                                    {/* bs4:font-weight-bold bs5: fw-bold */}
                                    <h3 className="my_heading">Başarılarımız</h3>
                                    <p className="display-6">Başarı Oranı</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                                    <i className="fa-solid fa-check performance_icon text-warning" />
                                    <span className="counter" data-counter={250} />
                                    <p className="text-center">Çalışma Saati</p>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                                    <i className="fa-solid fa-person-chalkboard performance_icon text-warning" />
                                    <span className="counter" data-counter={15} />
                                    <p className="text-center">Ekip sayısı</p>
                                </div>
                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                                    <i className="fa-brands fa-intercom performance_icon text-warning" />
                                    <span className="counter" data-counter={110} />
                                    <p className="text-center">Müşteri Sayısı</p>
                                </div>
                            </div>
                        </section>
                        {/* end section Başarılar */}
                        {/* start section yeni haberler */}
                        <section id="newspaper" className="wow fadeIn">
                            <div className="container">
                                <div className="row">
                                    <h3 className="my_heading">Haberler</h3>
                                    <p className="display-6 text-center">Yeni Bilgileri Öğrenin</p>
                                    <p className="line-clamp15">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis
                                        at deserunt commodi, quam, libero voluptas accusamus ipsum nisi
                                        magni necessitatibus. Deserunt nesciunt ipsum eos ratione excepturi
                                        iste! Atque, minima! Ex, cupiditate nobis provident ducimus error
                                        tenetur impedit quasi iusto inventore maiores sint atque saepe eius
                                        quam ullam magnam. Voluptas quis possimus laboriosam ad nihil porro
                                        eveniet cumque harum ducimus. Eaque maiores sit facere nam dicta
                                        ratione sed iure quae quaerat sunt? Sequi quos mollitia
                                        necessitatibus voluptates, ratione dolor sit, possimus ad nam
                                        laudantium, aspernatur qui quis fugiat eius voluptatem! Consequatur
                                        pariatur voluptates cumque, qui neque iusto reprehenderit itaque
                                        quis quod molestias! Pariatur veritatis neque, aliquam inventore
                                        iure beatae laborum doloremque temporibus magnam perferendis tempora
                                        accusantium expedita quaerat molestiae dolor. A corrupti dolorum
                                        vero atque iure voluptates sunt sit, inventore, blanditiis corporis
                                        quam tempora delectus sed aut! Possimus aspernatur laboriosam amet
                                        voluptas. Maxime suscipit minus voluptate sequi ad earum tenetur!
                                        Velit vel recusandae illo id deleniti consequuntur cum vero quam
                                        inventore iure odit beatae perspiciatis, earum optio. Alias quasi
                                        optio possimus distinctio. Sequi, fugiat vero debitis cupiditate
                                        illo pariatur enim? Magni quos qui autem commodi harum. Illo
                                        repudiandae esse repellendus maiores odit quam similique, cupiditate
                                        quasi saepe provident suscipit dolorem recusandae? Doloremque quae
                                        vel excepturi asperiores voluptates consectetur quisquam molestiae.
                                        Nulla nihil repellendus, quo expedita quasi libero earum, veniam
                                        laborum autem molestiae odio voluptatem dicta eum totam minima
                                        incidunt suscipit eaque itaque laboriosam ipsa voluptates debitis
                                        eveniet. Quibusdam, quod exercitationem. Nihil illum recusandae
                                        voluptatibus molestias ratione sapiente dolore fugiat, consectetur
                                        voluptatum facilis odit blanditiis ad sed, eum ducimus. Sunt quos
                                        rem provident accusamus aperiam minus fuga expedita eos dignissimos
                                        assumenda! Hic obcaecati aliquid, earum maiores quis fuga fugiat
                                        distinctio omnis dolores eveniet est suscipit ea debitis, atque
                                        consequatur tempora pariatur corporis nostrum. Quis, voluptate
                                        obcaecati? Mollitia libero odio ipsa omnis? Saepe repellendus ex
                                        voluptatum beatae molestiae voluptates fugit tenetur soluta ipsam
                                        similique voluptas, in nulla rem! Enim, recusandae asperiores est
                                        tempora, eum dolorum sed in dolores ipsa, eveniet eos aliquam.
                                        Suscipit ut quasi natus nemo minus? Ipsa asperiores quos tempore,
                                        natus officia dolore excepturi velit quasi eum impedit, eligendi
                                        tenetur voluptates. Architecto voluptates praesentium magni dolorem
                                        incidunt cum nesciunt consequatur. Et ea obcaecati vero animi nemo
                                        pariatur laudantium expedita odio iure, nobis, maiores nihil.
                                        Consequatur accusantium minima illum aspernatur voluptatibus
                                        deleniti earum eos architecto labore, quo eveniet dolores sapiente
                                        vel. Harum, corrupti nesciunt? Iure optio perspiciatis voluptatem
                                        quod omnis nulla quisquam, dolorum temporibus magni illum dolore
                                        quidem amet quis placeat est, reprehenderit atque blanditiis quam
                                        necessitatibus reiciendis explicabo quibusdam ab! Sint quo nobis
                                        voluptatum natus obcaecati quibusdam perspiciatis provident,
                                        corporis repellat veritatis accusantium, iusto, minima consequatur?
                                        Beatae mollitia enim nobis. Labore accusantium cum id cumque
                                        repellat sapiente earum doloribus at? Impedit dignissimos eligendi
                                        vel illo placeat. Illum libero reprehenderit ut dolorem tempora
                                        exercitationem velit architecto quod inventore asperiores, laborum
                                        suscipit, itaque, enim incidunt. Quibusdam eveniet molestias
                                        corrupti ut dolorum nam. Quaerat dolores similique culpa illum,
                                        quisquam consequuntur? Dolorum saepe sint ab alias earum odio qui
                                        consequatur dicta voluptates, maxime culpa cupiditate quidem nam
                                        obcaecati! Tempore illum laborum obcaecati labore fuga? Nihil,
                                        consectetur ea vel aspernatur quas enim molestias, harum recusandae
                                        omnis deserunt id beatae dolorum, voluptatum inventore velit? Sint
                                        molestias iste aliquid quo impedit saepe eaque quasi, blanditiis ad
                                        amet! Ipsa in earum molestias voluptatibus distinctio nemo. Libero
                                        autem dolorum dolores voluptatum distinctio explicabo ut, similique
                                        labore optio veniam dicta fugit aperiam natus rerum adipisci
                                        deserunt iusto dolore nulla ipsam. Odit totam saepe deserunt modi
                                        mollitia enim quas. Vel delectus possimus quos, consequatur sint
                                        repellendus unde laboriosam voluptas, esse eaque cum odio
                                        consectetur praesentium incidunt! Consectetur blanditiis dolore
                                        tempore quo?
                                    </p>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-sm btn-primary">More</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end section yeni haberler  */}
                        {/* start section about */}
                        <section id="about" className="wow fadeIn">
                            <div className="container">
                                <div className="row">
                                    <h3 className="my_heading">Hakkımızda</h3>
                                    <p className="display-6 text-center">Yeni Bilgileri Öğrenin</p>
                                    <p className="line-clamp15">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis
                                        at deserunt commodi, quam, libero voluptas accusamus ipsum nisi
                                        magni necessitatibus. Deserunt nesciunt ipsum eos ratione excepturi
                                        iste! Atque, minima! Ex, cupiditate nobis provident ducimus error
                                        tenetur impedit quasi iusto inventore maiores sint atque saepe eius
                                        quam ullam magnam. Voluptas quis possimus laboriosam ad nihil porro
                                        eveniet cumque harum ducimus. Eaque maiores sit facere nam dicta
                                        ratione sed iure quae quaerat sunt? Sequi quos mollitia
                                        necessitatibus voluptates, ratione dolor sit, possimus ad nam
                                        laudantium, aspernatur qui quis fugiat eius voluptatem! Consequatur
                                        pariatur voluptates cumque, qui neque iusto reprehenderit itaque
                                        quis quod molestias! Pariatur veritatis neque, aliquam inventore
                                        iure beatae laborum doloremque temporibus magnam perferendis tempora
                                        accusantium expedita quaerat molestiae dolor. A corrupti dolorum
                                        vero atque iure voluptates sunt sit, inventore, blanditiis corporis
                                        quam tempora delectus sed aut! Possimus aspernatur laboriosam amet
                                        voluptas. Maxime suscipit minus voluptate sequi ad earum tenetur!
                                        Velit vel recusandae illo id deleniti consequuntur cum vero quam
                                        inventore iure odit beatae perspiciatis, earum optio. Alias quasi
                                        optio possimus distinctio. Sequi, fugiat vero debitis cupiditate
                                        illo pariatur enim? Magni quos qui autem commodi harum. Illo
                                        repudiandae esse repellendus maiores odit quam similique, cupiditate
                                        quasi saepe provident suscipit dolorem recusandae? Doloremque quae
                                        vel excepturi asperiores voluptates consectetur quisquam molestiae.
                                        Nulla nihil repellendus, quo expedita quasi libero earum, veniam
                                        laborum autem molestiae odio voluptatem dicta eum totam minima
                                        incidunt suscipit eaque itaque laboriosam ipsa voluptates debitis
                                        eveniet. Quibusdam, quod exercitationem. Nihil illum recusandae
                                        voluptatibus molestias ratione sapiente dolore fugiat, consectetur
                                        voluptatum facilis odit blanditiis ad sed, eum ducimus. Sunt quos
                                        rem provident accusamus aperiam minus fuga expedita eos dignissimos
                                        assumenda! Hic obcaecati aliquid, earum maiores quis fuga fugiat
                                        distinctio omnis dolores eveniet est suscipit ea debitis, atque
                                        consequatur tempora pariatur corporis nostrum. Quis, voluptate
                                        obcaecati? Mollitia libero odio ipsa omnis? Saepe repellendus ex
                                        voluptatum beatae molestiae voluptates fugit tenetur soluta ipsam
                                        similique voluptas, in nulla rem! Enim, recusandae asperiores est
                                        tempora, eum dolorum sed in dolores ipsa, eveniet eos aliquam.
                                        Suscipit ut quasi natus nemo minus? Ipsa asperiores quos tempore,
                                        natus officia dolore excepturi velit quasi eum impedit, eligendi
                                        tenetur voluptates. Architecto voluptates praesentium magni dolorem
                                        incidunt cum nesciunt consequatur. Et ea obcaecati vero animi nemo
                                        pariatur laudantium expedita odio iure, nobis, maiores nihil.
                                        Consequatur accusantium minima illum aspernatur voluptatibus
                                        deleniti earum eos architecto labore, quo eveniet dolores sapiente
                                        vel. Harum, corrupti nesciunt? Iure optio perspiciatis voluptatem
                                        quod omnis nulla quisquam, dolorum temporibus magni illum dolore
                                        quidem amet quis placeat est, reprehenderit atque blanditiis quam
                                        necessitatibus reiciendis explicabo quibusdam ab! Sint quo nobis
                                        voluptatum natus obcaecati quibusdam perspiciatis provident,
                                        corporis repellat veritatis accusantium, iusto, minima consequatur?
                                        Beatae mollitia enim nobis. Labore accusantium cum id cumque
                                        repellat sapiente earum doloribus at? Impedit dignissimos eligendi
                                        vel illo placeat. Illum libero reprehenderit ut dolorem tempora
                                        exercitationem velit architecto quod inventore asperiores, laborum
                                        suscipit, itaque, enim incidunt. Quibusdam eveniet molestias
                                        corrupti ut dolorum nam. Quaerat dolores similique culpa illum,
                                        quisquam consequuntur? Dolorum saepe sint ab alias earum odio qui
                                        consequatur dicta voluptates, maxime culpa cupiditate quidem nam
                                        obcaecati! Tempore illum laborum obcaecati labore fuga? Nihil,
                                        consectetur ea vel aspernatur quas enim molestias, harum recusandae
                                        omnis deserunt id beatae dolorum, voluptatum inventore velit? Sint
                                        molestias iste aliquid quo impedit saepe eaque quasi, blanditiis ad
                                        amet! Ipsa in earum molestias voluptatibus distinctio nemo. Libero
                                        autem dolorum dolores voluptatum distinctio explicabo ut, similique
                                        labore optio veniam dicta fugit aperiam natus rerum adipisci
                                        deserunt iusto dolore nulla ipsam. Odit totam saepe deserunt modi
                                        mollitia enim quas. Vel delectus possimus quos, consequatur sint
                                        repellendus unde laboriosam voluptas, esse eaque cum odio
                                        consectetur praesentium incidunt! Consectetur blanditiis dolore
                                        tempore quo?
                                    </p>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-sm btn-primary">More</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end section blog */}
                        {/* start section blog */}
                        <h3 className="my_heading" style={{ fontWeight: "bold" }}>
                            Blog
                        </h3>
                        <p className="display-6 text-center">Yeni Blog</p>
                        <section id="blog" className="wow fadeIn">
                            <div className="container">
                                <div className="row">
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/coffee-gebb0bade8_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-1</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/about.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-2</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/header.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-3</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/teamwork-g2e52e6c5d_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-4</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/coffee-gebb0bade8_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-5</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/coffee-gebb0bade8_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-6</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/coffee-gebb0bade8_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-7</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1.blog */}
                                    <div className="col-md-3">
                                        <div className="card">
                                            <a href="#!">
                                                <img
                                                    className="card-img-top"
                                                    src="./img/coffee-gebb0bade8_1280.jpg"
                                                    alt="Title"
                                                />
                                            </a>
                                            <div className="card-body">
                                                <h4 className="card-title">Blog-8</h4>
                                                <p className="card-text line-clamp8">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                    Nihil facere dicta quae, placeat ducimus aliquam, qui,
                                                    expedita neque porro temporibus dignissimos quasi magnam
                                                    aperiam ab libero iste. Non, tenetur temporibus. Animi libero,
                                                    consectetur nam repellendus distinctio temporibus perferendis
                                                    sed excepturi a exercitationem doloribus, quod laboriosam
                                                    dolorem facere iste sequi. Consequatur, tenetur quasi? Magnam
                                                    rerum itaque repudiandae voluptatem voluptate, sapiente
                                                    ratione.
                                                </p>
                                                <span className="blog_date">01/06/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end section blog */}
                        {/* start section maos */}
                        <section id="maps" className="wow fadeIn">
                            <h3 className="my_heading">Map</h3>
                            <p className="display-6 text-center">Yeni Bilgileri Öğrenin</p>
                            {/* https://www.embedmap.net/ */}
                            <iframe
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?width=985&height=551&hl=en&q=%20malatya+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            />
                        </section>
                        {/* end section contact */}
                    </main>
                    {/* main end */}
                </>
        ) //end return
    } // end render
}//end clas

// export default Main
// i18n Wrapper
export default withTranslation()(Main)   

