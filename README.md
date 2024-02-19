# knip-webpack-configs-issue-repro

Install the dependencies with `pnpm install`

Run knip with `pnpm lint:knip`

You should get:

```
Unlisted dependencies (5)
C:/Dev/poc/knip-webpack-configs-issue-repro/node_modules/.pnpm/@svgr+webpack@8.1.0_typescript@5.3.3/node_modules/@svgr/webpack/dist/index.js                                webpack.dev.js
C:/Dev/poc/knip-webpack-configs-issue-repro/node_modules/.pnpm/css-loader@6.8.1_webpack@5.90.1/node_modules/css-loader/dist/cjs.js                                          webpack.dev.js
C:/Dev/poc/knip-webpack-configs-issue-repro/node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.35_typescript@5.3.3_webpack@5.90.1/node_modules/postcss-loader/dist/cjs.js  webpack.dev.js
C:/Dev/poc/knip-webpack-configs-issue-repro/node_modules/.pnpm/style-loader@3.3.3_webpack@5.90.1/node_modules/style-loader/dist/cjs.js                                      webpack.dev.js
C:/Dev/poc/knip-webpack-configs-issue-repro/node_modules/.pnpm/swc-loader@0.2.3_@swc+core@1.4.0_webpack@5.90.1/node_modules/swc-loader/src/index.js                         webpack.dev.js
```
