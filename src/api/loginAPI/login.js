import request from '@/utils/request';

export const getAllCustomer = function (username, password) {
    return request({
        url: '/customers/' + username + '/' + password,
        method: 'get',
    });
};
