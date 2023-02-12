import { IPropPageBase } from '../bases/IPropPageBase'
import { ITimeline } from '../ITimelines'
import { ISkillStart } from '../ISkillStart'

export interface IPropsResume extends IPropPageBase {
  content: {
    workHistory: ITimeline[]
    educationHistory: ITimeline[]
    skillSoft: ISkillStart[]
    skillLanguages: ISkillStart[]
  }
}
