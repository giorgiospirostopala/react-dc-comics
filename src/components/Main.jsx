import comics from "../data/comics";

const Main = (props) => {
    return (
        <main className="">
            <div className="bg-black">
                <div className="container py-5">
                    <h3 className="font-weight-bold text-white">CONTENUTO</h3>
                    <div className="card-container">
                        {comics.slice(0, 2).map((comic) => (
                            <div className="card" key={comic.id}>
                                <img src={comic.thumb} alt={comic.title} />
                                <div className="card-content">
                                    <h3 className="card-title">{comic.title}</h3>
                                    {/* <p className="card-description">{comic.description}</p> */}
                                    <p className="card-price">{comic.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-primary p-3">
                <div className="container py-5">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-center">
                            <img className="img-fluid primary-pics" src="/img/buy-comics-digital-comics.png" alt="Icona" />
                            <p className="text-white m-4">TESTO</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid primary-pics" src="/img/buy-comics-digital-comics.png" alt="Icona" />
                            <p className="text-white m-4">TESTO</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid primary-pics" src="/img/buy-comics-digital-comics.png" alt="Icona" />
                            <p className="text-white m-4">TESTO</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid primary-pics" src="/img/buy-comics-digital-comics.png" alt="Icona" />
                            <p className="text-white m-4">TESTO</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid primary-pics" src="/img/buy-comics-digital-comics.png" alt="Icona" />
                            <p className="text-white m-4">TESTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;