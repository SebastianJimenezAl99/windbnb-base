import "./CardData.css"

function CardData(props){
    return(
        <div className="body-card">
            <img className="imagen-card" src={props.photo} />
            <div className="info-primera-parte">
                <div>
                    {props.superhost ? <span className="super-host">Super Host</span> :'' }
                    {props.beds ? <span className="info-apart">{props.type+" . "+props.beds+" beds"}</span> : <span className="info-apart">{props.type}</span>}
                </div>
                <span><i className="fa-solid fa-star"></i>{props.rating}</span>
            </div>
            <p className="more-info-apart">{props.title}</p>
        </div>
    )
}

export default CardData;