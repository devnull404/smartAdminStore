import {
    Link
} from 'react-router-dom';

const Controlto = (props) => {
    return(
        <Link className="controlItem" to={props.info.href}>
            <div>
                <img className="controlIcons" style={{width: "2.2vh", color: "white"}} src={props.info.href + ".svg"} alt="control logo"/>
            </div>
            <div className="controlText">
                {props.info.text}
            </div>
        </Link>
    )
};

export default Controlto