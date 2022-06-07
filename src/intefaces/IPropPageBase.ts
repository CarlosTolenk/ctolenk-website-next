import {IPropMeta} from "./IPropMeta";

export interface IPropPageBase extends IPropMeta{
    page: {
        title: string;
        slogan: string;
    }
}
