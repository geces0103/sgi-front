import { AUTHORIZATION_TOKEN } from "../../../ActionService";
import { getTokenStorage, setLocalStorage } from "../../../GlobalService";
import { BODY_CREDENTIALS, POST, POST_LOGIN } from "../../../HeaderService";
import { POST_SIGN } from "./SignAction";

export function getAuthenticationSign() {
    fetch(`http://54.226.71.50/auth/realms/master/protocol/openid-connect/token`, POST_LOGIN()).then(res => {
        return res.json()
    }).then(res => {
        setLocalStorage(AUTHORIZATION_TOKEN, JSON.stringify(res))
    })
}