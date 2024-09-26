import { Api } from './api';

export async function LoginRequest(email: string, password: string) {
  try {
    const response = await Api.post('login', { email, password });

    return response.data;
  } catch (error) {
    return null;
  }
}
