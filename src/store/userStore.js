import { action, makeObservable, observable } from "mobx";
import { auth } from "../firebaseConfig";

class UserStore {
    @observable currentUserId = null

    constructor(rootStore) {
        makeObservable(this)
        this.rootStore = rootStore
    }

    @action
    init() {
        auth.currentUser.uid ? this.currentUserId = auth.currentUser.uid : this.currentUserId = null
    }
}

export default UserStore