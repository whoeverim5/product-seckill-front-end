import request from '@/utils/request';

export const verifyToken = function (token) {
    return request({
        url: '/customers/',
        method: 'get',
        headers: {
            'authorization': token,
        }
    });
};
