import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Raphael",
    user_email: "raphael@email.com",
  });
}
