import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { UserProvider } from './src/context/userContext';
import { MobileDashboard } from './src/screens/MobileDashboard';

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Gestão Escolar Mobile</Text>
        </View>
        <MobileDashboard />
        <StatusBar style="auto" />
      </SafeAreaView>
    </UserProvider>
  );
}
