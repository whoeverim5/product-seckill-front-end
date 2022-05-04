import Vue from 'vue';

const message = {
    success: (msg) => {
        Vue.prototype.$message.success(msg);
    },
    error: (msg) => {
        Vue.prototype.$message.error(msg);
    },
    warning: (msg) => {
        Vue.prototype.$message.warning(msg);
    },
    info: (msg) => {
        Vue.prototype.$message.info(msg);
    },

};

export default message;