import * as Notifications from 'expo-notifications';

const API_URL = 'http://localhost:3000/api';

export async function registerForPushNotificationsAsync(userId) {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return { status };

  const tokenResponse = await Notifications.getDevicePushTokenAsync();
  const fcmToken = tokenResponse.data;

  await fetch(`${API_URL}/notifications/register-device`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, token: fcmToken, platform: 'expo' }),
  });

  return { status, token: fcmToken };
}
