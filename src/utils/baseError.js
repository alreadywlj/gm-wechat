'use strict';

/**
 * 参考地址：http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html
 * 
 * GET: 200 OK / POST: 201 Created / PUT: 200 OK / DELETE: 204 No Content
 * 
 * status: 400 校验失败等
 * 
 * status: 401 用户未提供身份验证凭据，或者没有通过身份验证 
 * 
 * status: 403 用户通过了身份验证，但是不具有访问资源所需的权限
 * 
 * status: 404 所请求的资源不存在，或不可用
 * 
 * status: 500 客户端请求有效，服务器处理时发生了意外
 * 
 * status: 503 服务器无法处理请求，一般用于网站维护状态
 */

class BaseError {
    constructor() {
        this.errorInfo = {

            UNKNOWN_EXCEPTION: {
                code: 10001,
                message: '系统捕获的未知异常'
            },
            UNDEFINED_ERROR: {
                code: 10002,
                message: '未定义的异常'
            },
            INTERNAL_ERROR: {
                code: 10003,
                message: '内部错误'
            },
            PARAMETER_ERROR: {
                code: 10004,
                message: '参数校验错误'
            },
            SYSTEM_CONFIG_CANNOT_EDIT: {
                code: 10005,
                message: '系统初始设置无法编辑'
            },
            TOKEN_EXPIRE: {
                code: 10006,
                message: 'token过期'
            },
            TOKEN_INVALID: {
                code: 10007,
                message: 'token无效'
            },
            TOKEN_BLACK: {
                code: 10008,
                message: 'token黑名单'
            },
            TOKEN_RESET: {
                code: 10009,
                message: 'token重置'
            },
            NOT_ENTER_ERROR: {
                code: 10010,
                message: '没有输入必传的参数'
            }

        }

        const { baseError } = this;

        this.baseError = baseError.bind(this);
    }

    //校验错误
    baseError(errorKey, extraMessage = '') {

        let info = { code: 10002, message: '未定义的错误' };

        for (const item in this.errorInfo) {

            if (errorKey === item) {

                let code = this.errorInfo[item].code;

                let message = this.errorInfo[item].message;

                if (extraMessage) {
                    message = `${message}(${extraMessage})`
                }

                info = { code, message };
            }
        }
        throw new Error(JSON.stringify({ info: info }));
    }
}

module.exports = new BaseError();