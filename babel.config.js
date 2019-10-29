module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env"
        ],
        ["@babel/preset-react"]
    ];
    const plugins = [
    	"@babel/plugin-transform-react-jsx",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        ["@babel/plugin-transform-regenerator", {
            "asyncGenerators": false,
            "generators": false,
            "async": false
          }],
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements",
        "transform-es2015-shorthand-properties",
        "@babel/plugin-transform-runtime"
    ];

    return {
        presets,
        plugins,
        "env": {
            "test": {
                "presets": [
                    [
                        "@babel/preset-env"                        
                    ]
                ]
            }
        }
    }
}