module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  "framework": "@storybook/react"
}