export const getSession = async (hash) =>
  fetch(`http://localhost:3005/sessions?hash=${hash}`)
    .then((loadedSession) => loadedSession.json())
    .then(
      ([loadedSession]) =>
      loadedSession && {
          id: loadedSession.id,
          hash: loadedSession.login,
          user: loadedSession.user,
        }
    );
