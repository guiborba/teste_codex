import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useUser } from '../context/userContext';
import { registerForPushNotificationsAsync } from '../services/notificationService';

export function MobileDashboard() {
  const { user, login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!user) {
    return (
      <View style={{ padding: 16, gap: 8 }}>
        <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Entrar" onPress={() => login(email, password)} />
      </View>
    );
  }

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Text>Perfil: {user.role}</Text>
      <Button title="Ativar push" onPress={() => registerForPushNotificationsAsync(user.id)} />
      <Text>Notificações e comunicados chegam neste painel via Expo Notifications + FCM.</Text>
    </View>
  );
}
