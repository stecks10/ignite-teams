import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Groups } from "./src/screens/Groups";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Groups />
    </ThemeProvider>
  );
}
