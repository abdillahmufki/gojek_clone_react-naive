import React from "react";
import Home from "./src/Pages/Home";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Black.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <Home />;
};

export default App;
