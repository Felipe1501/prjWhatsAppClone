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

        if (!this._initialized){
        // Initialize Firebase
          firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

          this._initialized = true;
        }
    }

    static db(){
        return firebase.firestore();
    }

    static hd(){
        return firebase.storage();
    }
}