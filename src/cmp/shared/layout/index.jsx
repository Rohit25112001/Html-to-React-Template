import { useLocation } from 'react-router-dom';
import SliderSection from '../../home/slider-section';
const Layout= ({children}) =>{
    //check active route
    const location = useLocation();
    const activeRoute = location.pathname;
    return(
        <>
        {/*Navbar section */}
            <div className="hero_area">
                <header className="header_section">
                    <div className="header_top">
                    <div className="container-fluid">
                        <div className="contact_nav">
                        <a href="">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                            Call : +01 123455678990
                            </span>
                        </a>
                        <a href="">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                            Email : demo@gmail.com
                            </span>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <span>
                            Inance
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about"> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    </div>
                </header>
                {
                    activeRoute==='/' ? <SliderSection/>:null // if home route active then sho sliderSection else null
                }
            </div>

            {/*Childrens */}
            <div>
                {children}
            </div>


                {/*Footer section */}
            <section className="info_section ">
                    <div className="container">
                    <h4>
                        Get In Touch
                    </h4>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                        <div className="info_items">
                            <div className="row">
                            <div className="col-md-4">
                                <a href="">
                                <div className="item ">
                                    <div className="img-box ">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                    Lorem Ipsum is simply dummy text
                                    </p>
                                </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="">
                                <div className="item ">
                                    <div className="img-box ">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                    +02 1234567890
                                    </p>
                                </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="">
                                <div className="item ">
                                    <div className="img-box">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                    demo@gmail.com
                                    </p>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="social-box">
                    <h4>
                        Follow Us
                    </h4>
                    <div className="box">
                        <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
            </section>
            <footer className="footer_section">
                        <div className="container">
                        <p>
                            &copy; <span id="displayDateYear"></span> All Rights Reserved By
                            <a href="https://html.design/">Free Html Templates</a>
                        </p>
                        </div>
            </footer>
        </>
    );
}
export default Layout;