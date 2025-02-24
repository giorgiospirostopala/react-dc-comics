const Header = (props) => {
    return (
        <header className="container d-flex justify-content-between">
            <nav className="row w-100 align-items-center p-2">
                <figure className="col-2">
                    <img src="/img/dc-logo.png" alt="DC Logo" />
                </figure>
                <div className="col-10">
                    <ul className="d-flex list-unstyled mb-0 flex-nowrap font-weight-bold justify-content-end">
                        {props.links.map((link) => (
                            <li key={link.id}><a className={`d-flex justify-content-between ml-3 ${link.current ? 'active' : ''}`} href={link.url}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;