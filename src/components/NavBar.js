import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthAmerica} from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faEarthAmerica} />
            <h4>My Travel Journal</h4>
        </div>
    )
}
