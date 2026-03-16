import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status;
}
