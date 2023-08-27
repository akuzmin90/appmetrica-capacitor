import { registerPlugin } from '@capacitor/core';
const AppMetrica = registerPlugin('AppMetrica', {
    web: () => import('./web').then(m => new m.AppMetricaWeb()),
});
export * from './definitions';
export { AppMetrica };
//# sourceMappingURL=index.js.map