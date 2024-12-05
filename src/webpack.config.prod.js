const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    mode: 'production',
    plugins: [new WorkboxPlugin.GenerateSW()],
};
