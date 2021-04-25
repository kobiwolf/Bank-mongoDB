const path =
  process.env.NODE_ENV === 'production'
    ? '/api/users'
    : 'http://localhost:3001/api/users';
export default path;
