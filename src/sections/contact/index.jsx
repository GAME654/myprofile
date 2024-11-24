import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return(
        <div>
            <div className='flex items-end gap-4 text-2xl' >
        <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faGithub}/>
        <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faFacebook}/>
        <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faHippo}/>
        </div>
        </div>
    )
}
export default Contact;