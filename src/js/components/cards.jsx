import react from 'react'

const Card = ({titleProp}) => {
    return(
        <div class="d-flex">
            <div class="card" style={{"width": "18rem;"}}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{titleProp}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>      
        </div>
        
    )
}

export default Card
