export async function getTwitchAppAccessToken() {
  const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_TWITCH_CLIENT_SECRET;

  try {
    const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
      method: 'POST'
    });

    const data = await response.json();
    return data.access_token; // This is your app access token
  } catch (error) {
    console.error('Error getting Twitch token:', error);
    return null;
  }
}
