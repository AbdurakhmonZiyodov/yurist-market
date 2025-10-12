import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const background = !isDarkMode ? '#121212' : '#F5F5F5';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={background}
      />
      <WebViewComponent background={background} />
    </SafeAreaProvider>
  );
}

const WebViewComponent = ({ background }: { background: string }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]} edges={['top', 'bottom']}>
      <WebView
        source={{ uri: 'https://yuristmarket.uz/' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;