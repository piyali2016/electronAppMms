import * as Nedb from "nedb";


export class UserDatabase
{
    public dbUser;
    constructor ()
    {
        this.dbUser = new Nedb({ filename: './db.users.json', autoload: true });
    }
 	
 	insertuser(userObj) {
        return new Promise((resolve, reject) => {
            return this.dbUser.insert(userObj, ((err, newUser) => {
                if ( err ) 
                {
                    reject(err);
                }
                else 
                {
                    resolve(newUser);
                }
            }))
        }); 
    }

    findAll() {
        return new Promise((resolve, reject) => {
            return this.dbUser.find({}, ((err, userid) => {
                if ( err ) 
                {
                    reject(err);
                }
                else 
                {
                    resolve(userid);
                }
            }));
        })
    }

    findUserByQuery(userQuery) {
    	var returnObj = {userObj:'',err:false,errMsg:''};
     	this.dbUser.find(userQuery, ((err, userObj) => {
                if ( err ) 
                {
                   returnObj.err = true;
                   returnObj.errMsg = err;
                }
                else 
                {
                	returnObj.userObj = userObj;
                }
               return  returnObj;
            }));
    }
 
    
}