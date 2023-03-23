export const getUsersForMeeting = async () => {
  try {
    const response = await fetch('http://localhost:5000/getCharactersForMeeting');

    if (!response.ok) {
      throw new Error('can\'t get users');
    }

    const data = await response.json();
    
    return data;
  } catch (err) {
    throw new Error('can\'t get users');
  }
}