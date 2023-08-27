import { WebPlugin } from '@capacitor/core';
import { AppMetricaPlugin, YAMConfig, YAMReportEventOptions, YAMReportErrorOptions, YAMLocation, ECommerceScreen, YAMShowProductCardEventOptions, YAMShowProductDetailsEventOptions, ECommerceCartItem, ECommerceOrder, YAMUserProfileId, YAMUserProfile } from './definitions';
export declare class AppMetricaWeb extends WebPlugin implements AppMetricaPlugin {
    private isMetricaLogs;
    constructor();
    private log;
    activate(config: YAMConfig): Promise<void>;
    reportEvent(options: YAMReportEventOptions): Promise<void>;
    reportError(options: YAMReportErrorOptions): Promise<void>;
    setLocation(location: YAMLocation): Promise<void>;
    setLocationTracking(options: {
        enabled: boolean;
    }): Promise<void>;
    showScreenEvent(screen: ECommerceScreen): Promise<void>;
    showProductCardEvent(options: YAMShowProductCardEventOptions): Promise<void>;
    showProductDetailsEvent(options: YAMShowProductDetailsEventOptions): Promise<void>;
    addCartItemEvent(cartItem: ECommerceCartItem): Promise<void>;
    removeCartItemEvent(cartItem: ECommerceCartItem): Promise<void>;
    beginCheckoutEvent(order: ECommerceOrder): Promise<void>;
    purchaseEvent(order: ECommerceOrder): Promise<void>;
    setUserProfileId(userProfileId: YAMUserProfileId): Promise<void>;
    reportUserProfile(userProfile: YAMUserProfile): Promise<void>;
}
declare const AppMetrica: AppMetricaWeb;
export { AppMetrica };
