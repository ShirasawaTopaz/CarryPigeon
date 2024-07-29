import axios from "axios";
import sha256 from "crypto-js/sha256"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function login(uuid: number, password: string) {
    const password_sha256 = sha256(password);
    axios.post("/authenticator", {
        uuid,
        password: password_sha256,
    }).catch(function (error) {
        // TODO:处理错误
        return error;
    })
    return true;
}