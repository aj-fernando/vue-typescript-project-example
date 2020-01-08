import { VuexModule, Module, getModule, MutationAction } from "vuex-module-decorators";
import store from "@/store";
import { User, Profile, UserSubmit } from "../models";
import { loginUser, setJWT } from '../api';

// dynamic module
@Module({
  namespaced: true,
  dynamic: true,
  name: "users",
  store
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  get username() {
    return (this.user && this.user.username) || null;
  }

  @MutationAction
  async login(userSubmit: UserSubmit) {
    console.log(`users.ts : ${userSubmit.email} | ${userSubmit.password}`);
    const user = await loginUser(userSubmit);
    console.log("after POST")
    setJWT(user.token)
    return { user };
  }
}

export default getModule(UsersModule);
