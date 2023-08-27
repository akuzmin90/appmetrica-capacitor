var capacitorAppMetrica = (function (exports, core) {
    'use strict';

    const AppMetrica$1 = core.registerPlugin('AppMetrica', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppMetricaWeb()),
    });

    class AppMetricaWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'AppMetrica',
                platforms: ['web'],
            });
            this.isMetricaLogs = false;
        }
        log(...vars) {
            if (this.isMetricaLogs) {
                console.log(...vars);
            }
        }
        async activate(config) {
            this.isMetricaLogs = config.logs === undefined ? false : config.logs;
            this.log('AppMetrica: Web not supported. [activate()]', config);
        }
        async reportEvent(options) {
            this.log('AppMetrica: Web not supported. [reportEvent()]', options);
        }
        async reportError(options) {
            this.log('AppMetrica: Web not supported. [reportError()]', options);
        }
        async setLocation(location) {
            this.log('AppMetrica: Web not supported. [setLocation()]', location);
        }
        async setLocationTracking(options) {
            this.log('AppMetrica: Web not supported. [setLocationTracking()]', options);
        }
        async showScreenEvent(screen) {
            this.log('AppMetrica: Web not supported. [showScreenEvent()]', screen);
        }
        async showProductCardEvent(options) {
            this.log('AppMetrica: Web not supported. [showProductCardEvent()]', options);
        }
        async showProductDetailsEvent(options) {
            this.log('AppMetrica: Web not supported. [showProductDetailsEvent()]', options);
        }
        async addCartItemEvent(cartItem) {
            this.log('AppMetrica: Web not supported. [addCartItemEvent()]', cartItem);
        }
        async removeCartItemEvent(cartItem) {
            this.log('AppMetrica: Web not supported. [removeCartItemEvent()]', cartItem);
        }
        async beginCheckoutEvent(order) {
            this.log('AppMetrica: Web not supported. [beginCheckoutEvent()]', order);
        }
        async purchaseEvent(order) {
            this.log('AppMetrica: Web not supported. [purchaseEvent()]', order);
        }
        async setUserProfileId(userProfileId) {
            this.log('AppMetrica: Web not supported. [setUserProfileId()]', userProfileId);
        }
        async reportUserProfile(userProfile) {
            this.log('AppMetrica: Web not supported. [reportUserProfile()]', userProfile);
        }
    }
    const AppMetrica = new AppMetricaWeb();

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AppMetricaWeb: AppMetricaWeb,
        AppMetrica: AppMetrica
    });

    exports.AppMetrica = AppMetrica$1;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
