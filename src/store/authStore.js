import { auth } from '../firebaseConfig';
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

class AuthStore {
  createAccount = (email, password, handleError) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((err) => {
        const func = this.getErrorFuncs(err, handleError)
        if (func) {
          func()
        } else {
          handleError('Something went wrong');
        }
      });
  };

  loginAccount = (email, password, handleError) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((err) => {
        const func = this.getErrorFuncs(err, handleError)
        if (func) {
          func()
        } else {
          handleError('Something went wrong');
        }
      });
  };

  getErrorFuncs(err, handleError) {
    const funcs = {
      [AuthErrorCodes.WEAK_PASSWORD]: () => handleError('The password is too weak.'),
      [AuthErrorCodes.EMAIL_EXISTS]: () => handleError('The email address is already in use.'),
      [AuthErrorCodes.INVALID_EMAIL]: () => handleError('The email address is invalid.'),
      [AuthErrorCodes.INVALID_PASSWORD]: () => handleError('The password is invalid.'),
      [AuthErrorCodes.USER_DELETED]: () => handleError('User has been deleted.')
    }

    return funcs[err.code]
  }
}

export default AuthStore;
