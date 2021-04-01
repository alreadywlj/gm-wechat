
import taroRequest from '../../utils/request'

import { REQUEST_URL } from '../../config/config'

export function getArticle(condition) {
  return taroRequest({
    url: REQUEST_URL.ARTICLE_DETAIL + '47fa44b74879488ab2e35c15a675167b',
    method: 'GET',
    condition,
  })
}
