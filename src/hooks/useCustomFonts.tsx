import { useFonts } from 'expo-font';

const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'inter_28pt-Bold': require('../assets/fonts/Bold.ttf'),
        'inter_28pt-SemiBold': require('../assets/fonts/SemiBold.ttf'),
        'inter_28pt-Regular': require('../assets/fonts/Regular.ttf'),
    });

    return fontsLoaded;
};

export default useCustomFonts;
