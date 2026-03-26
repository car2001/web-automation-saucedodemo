module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/core/world.ts",
      "src/core/hooks.ts",
      "src/steps/**/*.ts"
    ],
    paths: ["features/**/*.feature"],
    format: ["progress"],
    parallel: 1
  }
};