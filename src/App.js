import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, useDarkMode, lightTheme, darkTheme} from "Styles/Themes";
import { Navbar, Footer } from 'Components/Templates';

import { Me, About, Work, Experience, Contact } from 'Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Navbar theme={theme} toggleTheme={themeToggler}/>
      <div className='pages'>
        <Me />
        <About />
        <Experience />
        <Work />
        <Contact theme={theme} toggleTheme={themeToggler}/>
      </div>
      <Footer />

    </ThemeProvider>
  );
};
export default App;