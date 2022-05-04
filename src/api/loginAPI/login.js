import request from '@/utils/request';

export const login = function (username, password) {
    return request({
        url: '/customers/' + username + '/' + password,
        method: 'get',
    });
};
