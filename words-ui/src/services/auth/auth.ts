import { WordsApiService } from "../api";

const authProvider = {
  isAuthenticated: false,

  signin(username: string, password: string, callback: Function) {
    authProvider.isAuthenticated = true;
    WordsApiService.authenticate(username, password)
      .then((token) => {
        callback(token);
      })
      .catch(() => {
        console.log('failed');
      });
  },

  signout(callback: Function) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { authProvider };
