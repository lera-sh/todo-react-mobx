import LoginPage from '../authorisation/LoginPage';
import SignupPage from '../authorisation/SignupPage';
import TodoSection from '../appComponents/TodoSection';

export const publicRoutes = [
  { path: '/', element: LoginPage },
  { path: 'login', element: LoginPage },
  { path: 'signup', element: SignupPage }
];
export const privateRoutes = [
  { path: '/', element: TodoSection },
  { path: 'todo', element: TodoSection }
];
