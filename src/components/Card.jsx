function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={`foto_card`} />
            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
                <p className="card-price">{props.price}</p>
            </div>
        </div>
    );
}

export default Card;