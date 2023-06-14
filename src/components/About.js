import Header from "./Header";

const About = () => {
    return (
        <>
            <Header />
            <section>
                <div className='about-row'>

                    <div className='about-col'>
                        <h1 className='intro'>Hi! I'm Nikki.</h1>
                        <p className='intro'>Software Engineer /<br></br>Web Developer</p>
                    </div>

                    <div className='about-container'>
                        <div className="icons">
                            <div className="icon-row">
                            <div className="icon box">
                                    <a href="https://nikki-lou.netlify.app/">
                                    <i class="fa-solid fa-address-card fa-2xl"></i>
                                    </a>
                                </div>
                                

                                <div className="icon box">
                                    <a href="https://www.instagram.com/nikki._lou_/">
                                        <i class="fa-brands fa-instagram fa-2xl"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon box">
                                    <a href="https://github.com/nalou4">
                                        <i class="fa-brands fa-github fa-2xl"></i>
                                    </a>
                                </div>

                                <div className="icon box transition-fade">
                                    <a href="https://www.linkedin.com/in/nikkilou/">
                                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="https://bmc.link/nikkilou">
                            <button id="portfolio">Support the Creator.</button>
                        </a>
                    </div>

                </div>
            </section>

        </>
    )
};

export default About;