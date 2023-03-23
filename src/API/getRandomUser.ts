import { User } from "../types/user";

export const getRandomUser = async (): Promise<User> => {
  try {
    const response = await fetch('http://localhost:5000/getRandomCharacter');

    if (!response.ok) {
      throw new Error('can\'t get an user');
    }

    const data = await response.json();

    return data
  } catch (err) {
    throw new Error('can\'t get an user');
  }
}