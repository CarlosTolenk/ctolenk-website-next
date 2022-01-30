import React, {MouseEventHandler} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IPropsButton {
    text: string;
    iconSource: IconDefinition;
    onHandlerClick: MouseEventHandler<HTMLAnchorElement>;
}

const Button = ({text, iconSource, onHandlerClick}: IPropsButton) => {
    return (
        <>
            <a onClick={onHandlerClick} className="bt-submit">
                <FontAwesomeIcon className='icon-button' size={"1x"} icon={iconSource}/>
                {text}
            </a>
        </>
    )

}

export default Button
