export function gapiInit(){

    window.gapi.load('auth2', function() {
        console.log('Gapi was load');
        window.gapi.auth2.init({
            client_id: "500266575647-p6ou80usfojor9fiqc4nc7veedt8gudq.apps.googleusercontent.com"
        });
    });
};

export async function googleSignIn(){

    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    await GoogleAuth.signIn({scope: 'profile email'});

    const GoogleUser = await GoogleAuth.currentUser.get();

    const currentUser = GoogleUser.getBasicProfile();

    const currentUserEmail = currentUser.getEmail();
    const currentUserName = currentUser.getName();

    return {
        email: currentUserEmail,
        name: currentUserName
    };

};

export function googleSignOut(){

    const GoogleAuth =  window.gapi.auth2.getAuthInstance();

    GoogleAuth.signOut()
    .then(() => {
        console.log('Google sign out')
    });

};