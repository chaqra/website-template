import { Link } from "react-router-dom";
import ServicesSection from "../Components/Services";

function Home() {
    return (
        <>
            <div className="banner-grid">
                <div className="banner-left">
                    <span className="section-label">Who We Are</span>

                    <p>WEBSITES</p>
                    <p>THAT</p>
                    <p className="gradient-text">WORK.</p>
                </div>

                <div className="banner-right">
                    <div className="banner-right-top">
                        <p>We are a digital studio specializing in web development, SEO, digital advertising, branding, and more.

We create purposeful digital experiences that do more than just look good. Every website, brand, and campaign we develop is built around your business, your goals, and the results you want to achieve.

We believe great solutions start with understanding. That's why we take the time to learn about your business, the challenges you face, and where you want to go. From there, we combine creativity, strategy, and technology to build solutions that work for you. </p>
                    </div>

                    <div className="banner-right-bottom">
                        <Link to="/contact" className="header-btn">
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </div>
            <ServicesSection />
        </>
    );
}

export default Home;