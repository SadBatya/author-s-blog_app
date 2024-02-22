import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff';
import { useCallback } from 'react';

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback(
    (operation, ...params) => {
      if (!server[operation]) {
        console.error(`Method ${operation} does not exist in the server object.`);
        return Promise.reject(`Method ${operation} does not exist in the server object.`);
      }

      const request = ['register', 'authorize', 'fetchPost'].includes(operation)
        ? params
        : [session, ...params];

      return server[operation](...request);
    },
    [session]
  );
};
