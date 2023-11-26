import MyRoutes from "./routes/MisRutas";
/* Estilos y temas */
import { Light } from "./styles/Themes";
import styled, { ThemeProvider } from "styled-components";
function App() {
  return (
    <Layout>
      <ThemeProvider theme={Light}>
        <MyRoutes />
      </ThemeProvider>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 85%;
  margin: 0 auto;
`;
