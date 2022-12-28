export default {
    extension: 'jsx',
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [ 'add-module-exports',
    ],
  };