import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { CartContextProvider } from "./contexts/CartProvider"
import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
          <Header />
          <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}


