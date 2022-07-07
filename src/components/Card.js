import './Card.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} alt=""/>
            <div className="card-content">
                <div className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                    <span>{props.location.toUpperCase()}</span>
                    <small><a href={props.googleMapsUrl}>View On Google Maps</a></small>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <h5 className="card-date">{props.date.start} - {props.date.end}</h5>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}
