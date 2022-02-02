import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Routes from "./src/routes";
import store from "./src/redux/store";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#222" style="light" />
        <Routes />
      </Provider>
    </PaperProvider>
  );
}
