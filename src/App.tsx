import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { CartContextProvider } from "./contexts/CartProvider"

export function App({children} : {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </ThemeProvider>
  )
}


