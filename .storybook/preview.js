import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'mydrugs-light',
    values: [
      {
        name: 'mydrugs-light',
        value: theme.colors.white
      },
      {
        name: 'mydrugs-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles storybookBg/>
      <Story />
    </ThemeProvider>
  ),
];