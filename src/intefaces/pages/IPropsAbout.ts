import { IPropPageBase } from '../bases/IPropPageBase'
import { IParagraph } from '../IParagraph'
import { IFeatures } from '../IFeatures'
import { IServices } from '../IServices'

export interface IPropsAbout extends IPropPageBase {
  content: {
    about: IParagraph[]
    features: IFeatures[]
    services: IServices[]
  }
}
