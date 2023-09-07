import "./Modals.css"
function Modals(props) {
    return(
        <section className="modal">
            <div className="modal_contenedor">
                <div className="modal-inputs">
                    <div className="div-input nivel-1">
                        <label htmlFor="location">LOCATION</label>
                        <input type="text" placeholder="Add Location" name="location" className="modal-filtros-input"/>
                    </div>
                    <div className="div-input nivel-2">
                        <label htmlFor="guest">GUEST</label>
                        <input type="text" placeholder="Add Guest" name="guest" className="modal-filtros-input"/>
                    </div>
                    <div className="nivel-3">
                        <button onClick={props.fun}><i className="fa-solid fa-magnifying-glass"></i>Search</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Modals;