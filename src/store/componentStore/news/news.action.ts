import { NewsAtHome_Action_Types } from './news.types/news.action.types'
import { news_Action } from '@store/interface'

export const getListNewsAtHome = (): news_Action => {
  return {
    type: NewsAtHome_Action_Types.ListNewsAtHome_REQUEST
  }
}
