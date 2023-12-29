import { useEffect } from 'react';
import { useStore } from 'react-redux';


export const userResetForm = (reset) => {
  const store = useStore()

  useEffect(() => {
    let currenWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let prevWasLogout = currenWasLogout;
      currenWasLogout = store.getState().app.wasLogout;

      if (currenWasLogout !== prevWasLogout) {
        reset();
      }
    });
  }, [reset, store]);
  
}