const postcss = require("cssnano/node_modules/postcss");

module.exports = {
    syntax: "postcss-scss",
    plugins: [
        require("postcss-preset-env")({
            stage: 1,
        }),
        require("autoprefixer"),
    ],
};
