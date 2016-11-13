import { AuthProviders, AuthMethods } from "angularfire2";

export const MyFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
