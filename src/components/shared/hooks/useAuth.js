import { useSelector } from 'react-redux';

import { isAuth } from 'components/redux/auth/auth-selectors';

const useAuth = () => {
  const result = useSelector(isAuth);

  return result;
};

export default useAuth;
