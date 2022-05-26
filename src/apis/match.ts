/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 14:40:50
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 10:17:09
 */
import {RootObject} from '@/model/rootObject'
// import {UserInfoModel, Users} from '@/model/userModel'
import https from '@/utils/https'
import {matchModel} from '@/model/matchModel'
import {RequestParams, ContentType, Method} from 'axios-mapper'

export const matchRequest = (testInfo: RequestParams) => {
    return https(false).request<RootObject<matchModel>>('match', Method.GET, testInfo, ContentType.json)
}
