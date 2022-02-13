module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}