const USER_KEY = 'demo_user';
const TOKEN_KEY = 'demo_token';

const DEMO_EMAIL = 'test@test.com';
const DEMO_PASSWORD = '12345';

const buildUser = (payload) => ({
  id: 1,
  name: payload.name || 'Demo User',
  email: payload.email || DEMO_EMAIL,
});

export const demoLogin = async (payload) => {
  if (!payload.email || !payload.password) {
    throw new Error('missing_credentials');
  }

  if (payload.email !== DEMO_EMAIL || payload.password !== DEMO_PASSWORD) {
    throw new Error('invalid_credentials');
  }

  const user = buildUser(payload);
  const token = 'demo-token';
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, token);
  return { user, token };
};

export const demoRegister = async (payload) => {
  if (!payload.name || !payload.email || !payload.password) {
    throw new Error('missing_credentials');
  }

  if (payload.email !== DEMO_EMAIL || payload.password !== DEMO_PASSWORD) {
    throw new Error('invalid_credentials');
  }

  const user = buildUser(payload);
  const token = 'demo-token';
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, token);
  return { user, token };
};

export const demoLogout = async () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};

export const getDemoSession = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const rawUser = localStorage.getItem(USER_KEY);
  if (!token || !rawUser) {
    return null;
  }

  try {
    return { token, user: JSON.parse(rawUser) };
  } catch (err) {
    return null;
  }
};
