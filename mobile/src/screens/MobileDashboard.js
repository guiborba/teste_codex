import { Text, View } from 'react-native';
import { useUser } from '../context/userContext';

export function MobileDashboard() {
  const { user } = useUser();

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Text>Perfil: {user.role}</Text>
      <Text>Notificações e comunicados chegam neste painel via Expo Notifications + FCM.</Text>
    </View>
  );
}
