import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NewGroups } from "./src/screens/NewGroups";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
        {fontsLoaded ? <NewGroups /> : <Loading />}
      </SafeAreaView>
    </ThemeProvider>
  );
}
