const Footer = () => {
    return (
        <footer>

            {/* footerone */}
            <div className="foto">
                <div className="container py-5">
                    <div>
                        <ul>
                            <li><h5><strong>TITOLO</strong></h5></li>
                            <li><p>testo</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* footerino */}
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <button>
                            ISCRIVITI
                        </button>
                    </div>
                    <div className="d-flex">
                        <div>
                            <h4>SEGUICI</h4>
                        </div>
                        <div className="">
                            <img src="/img/footer-twitter.png" alt="" />
                            <img src="/img/footer-twitter.png" alt="" />
                            <img src="/img/footer-twitter.png" alt="" />
                            <img src="/img/footer-twitter.png" alt="" />
                            <img src="/img/footer-twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;