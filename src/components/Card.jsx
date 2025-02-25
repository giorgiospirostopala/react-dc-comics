function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={`foto_card`} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default Card;