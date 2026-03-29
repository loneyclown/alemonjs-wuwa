import router from './response/router.js';

var index = defineChildren({
    register() {
        return {
            responseRouter: router
        };
    },
    onCreated() {
        logger.info('鸣潮助手 Server Done');
    }
});

export { index as default };
