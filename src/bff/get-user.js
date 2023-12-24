export const getUser = async (loginToFind) => {
  try {
    const response = await fetch(`http://localhost:3005/users?login=${loginToFind}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const loadedUsers = await response.json();

    if (loadedUsers.length > 0) {
      return loadedUsers[0];
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
