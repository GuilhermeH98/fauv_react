import { STATISTIC_PREVIEW_URL } from 'pages/StatisticPreview/api'
import { mock } from 'utils/mock'
import statisticPreviews from './list.json'

export const handlers = [mock('get', STATISTIC_PREVIEW_URL, statisticPreviews)]
