import { IPropPageBase } from '../bases/IPropPageBase'
import { ITimeline } from '../ITimelines'

export interface IPropsResume extends IPropPageBase {
  content: {
    workHistory: ITimeline[]
    educationHistory: ITimeline[]
  }
}
