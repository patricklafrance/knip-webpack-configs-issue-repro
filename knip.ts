import type { KnipConfig } from "knip";

export function defineKnipConfig() {
    const config: KnipConfig = {
        webpack: {
            config: ["webpack.*.js"]
        },
        ignoreDependencies: [
            // Browserlist isn't supported by plugins.
            "@workleap/browserslist-config"
        ]
    };

    return config;
}

export default defineKnipConfig();
