
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://106.14.35.174:25565",
                //target: "http://bahb.cn1.utools.club",
                changeOrigin: true
                /*pathRewrite: {
                  "^/api": ""
                }*/
            }
        }
    },
}
