let myjson = require("./static/datahome.json");
let mycity = require("./static/city.json");
module.exports = {
    publicPath: './',
    devServer: {
        port: 8081,
        host: '0.0.0.0',//将 host设置为 0.0.0.0
        before(app) {
            app.get("/api/datahome", (req, res) => {
                console.log(req)
                res.json(myjson);
            });
            app.get("/api/city", (req, res) => {
                console.log(req)
                res.json(mycity);
            });
        }

    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
                // Vue CLI v3 用户可参考 css-loader v1 文档
                // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCaseOnly'
            }
        }

    }
}