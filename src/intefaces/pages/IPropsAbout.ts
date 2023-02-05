import {IPropPageBase} from "../bases/IPropPageBase";
import {Paragraph} from "../Paragraph";
import {Features} from "../Features";
import {Services} from "../Services";

export interface IPropsAbout extends IPropPageBase {
    content: {
        about: Paragraph[]
        features: Features[]
        services: Services[]
    }
}
