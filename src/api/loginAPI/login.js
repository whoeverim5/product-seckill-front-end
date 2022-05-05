import request from '@/utils/request';

export const login = function (account, password, token) {
    return request({
        url: '/customers/' + account + '/' + password,
        method: 'get',
    });
};
