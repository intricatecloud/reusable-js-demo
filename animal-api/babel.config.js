module.exports = {
    plugins: [
        ["@babel/plugin-transform-modules-umd", {
        exactGlobals: true,
        globals: {
          index: 'AnimalApi'
        }
      }]
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };