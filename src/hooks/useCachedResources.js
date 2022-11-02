import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  async function loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHideAsync();

      // Load fonts
      await Font.loadAsync({
        'Manrope_Medium': require("../../assets/fonts/Manrope-Medium.ttf"),
        'Manrope_Bold': require("../../assets/fonts/Manrope-Bold.ttf"),
        'Manrope_Regular': require("../../assets/fonts/Manrope-Regular.ttf"),
      });
      
    } catch (e) {

      console.warn(e);
    } finally {
        
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }

  return isLoadingComplete;
};

export default useCachedResources;
