import * as Nedb from 'nedb';

export class UserDatabase {
    public dbUser;
    public returnObj = { success: false, error: ''};
    constructor () {
        this.dbUser = new Nedb({ filename: './db.users.json', autoload: true });
    }

    insert(user) {
        return new Promise((resolve, reject) => {
            return this.dbUser.insert(user, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }


    findUserByQuery( userQuery ) {
        return new Promise((resolve, reject) => {
            return this.dbUser.find(userQuery, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }
}
