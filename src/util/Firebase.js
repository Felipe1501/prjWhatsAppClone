const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {
    constructor(){

        this._config = {
            apiKey: "AIzaSyC0E3CyFoljTmEbjgSpXqb0dRLhlems1js",
            authDomain: "prjwhatsappfelipe.firebaseapp.com",
            databaseURL: "https://prjwhatsappfelipe-default-rtdb.firebaseio.com",
            projectId: "prjwhatsappfelipe",
            storageBucket: "prjwhatsappfelipe.appspot.com",
            messagingSenderId: "542763002830",
            appId: "1:542763002830:web:7fae2efea92f999289599f",
            measurementId: "G-18Y5LC3K37"
          };
          

        this.init();
    }

    init(){

        if (!window._initializedFirebase){
        // Initialize Firebase
          firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

          window._initializedFirebase = true;
        }
    }

    static db(){
        return firebase.firestore();
    }

    static hd(){
        return firebase.storage();
    }

    initAuth(){
        return new Promise((s, f)=>{
            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{
                let token  = result.credential.acessToken;
                let user = result.user;

                s({
                    user,
                    token
                });
            }).catch(err =>{
                f(err);
            });
        });
    }
}