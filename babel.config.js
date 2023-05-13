const { setModuleResolverPluginForTsConfig } = require('babel-plugin-module-resolver-tsconfig')

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module-resolver", {}], // get rid of error
            setModuleResolverPluginForTsConfig(), // auto set alias from tsconfig
        ]
    };
};
