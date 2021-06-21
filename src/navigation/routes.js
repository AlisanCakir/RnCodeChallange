import {
  SignInScreen,
  DashboardScreen,
  SignUpScreen,
  FormPageScreen
} from "../screens";

export const routes = [
  {
    component: SignInScreen,
    name: "SignInScreen",
    authStack: true,
  },
  {
    component: SignUpScreen,
    name: "SignUpScreen",
    authStack: true,
  },
  {
    component: DashboardScreen,
    name: "DashboardScreen",
    authStack: false,
  },
  {
    component: FormPageScreen,
    name: "FormPageScreen",
    authStack: false,
  },
];
