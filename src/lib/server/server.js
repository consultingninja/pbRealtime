import PocketBase from 'pocketbase'
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';


export const PB = new PocketBase("http://127.0.0.1:8090");
//sign in
await PB.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);


