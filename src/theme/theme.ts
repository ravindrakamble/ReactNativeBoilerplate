import { DefaultTheme } from 'react-native-paper'
declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string
    }

    interface Theme {
      myOwnProperty: boolean
    }
  }
}
const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#034748',
    accent: '#11B5E4',
    background: '#F1F7ED',
    surface: '#F1F7ED',
    text: '#001021',
    error: '#B71F0E',
    disabled: '#BEC6C6',
    placeholder: '#1481BA',
    backdrop: '#001021',
    myOwnColor: '#BADA55',
  },
}

export default theme
