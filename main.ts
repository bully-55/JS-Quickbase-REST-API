class QuickBase {

    private headers: object
    
    constructor(realm, userToken) {
        this.headers = {
            "Authorization": `QB-USER-TOKEN ${userToken}`,
            "QB-Realm-Hostname": realm,
            "Content-Type": "application/json"
        }
    }

    
}