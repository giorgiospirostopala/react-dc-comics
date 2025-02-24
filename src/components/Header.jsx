const Header = (props) => {
    return (
        <header className="container d-flex justify-content-between">
            <nav className="row align-items-center ">
                <figure className="col-2">
                    <img src="/img/dc-logo.png" alt="DC Logo" />
                </figure>
                <div className="col-10">
                    <ul className="d-flex list-unstyled mb-0 flex-nowrap font-weight-bold">
                        {props.links.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;