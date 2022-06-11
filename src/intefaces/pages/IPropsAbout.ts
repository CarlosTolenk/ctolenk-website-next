import {IPropPageBase} from "./IPropPageBase";
import {Paragraph} from "../Paragraph";
import {Features} from "../Features";

export interface IPropsAbout extends IPropPageBase {
    content: {
        about: Paragraph[]
        features: Features[]
        services: any[]
    }
}
