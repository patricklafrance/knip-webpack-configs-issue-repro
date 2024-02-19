// @ts-check

import { browserslistToSwc, defineDevConfig } from "@workleap/swc-configs";

const targets = browserslistToSwc();

// For additional information, refer to: https://gsoft-inc.github.io/wl-web-configs/swc/configure-dev/#configure-swc.
export const swcConfig = defineDevConfig(targets);
