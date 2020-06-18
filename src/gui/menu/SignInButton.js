import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const SignInButton = () => {
  const signIn = 'SignIn';
  const signOut = 'SignOut';
  const [buttonText, setButtonText] = useState(signIn);
  const [isLogged, setIsLogged] = useState(false);

  const firebaseConfig = {
    apiKey: 'AIzaSyCVkh1ku85ZZFHjA58DOU-CEB0qxmX74Yg',
    authDomain: 'mypiskelclone-954dc.firebaseapp.com',
    databaseURL: 'https://mypiskelclone-954dc.firebaseio.com',
    projectId: 'mypiskelclone-954dc',
    storageBucket: 'mypiskelclone-954dc.appspot.com',
    messagingSenderId: '909359872165',
    appId: '1:909359872165:web:c9ffa9f6d4ad09d995b54c',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const onClickHandler = () => {
    const label = document.querySelector('.main_menu-project_label');
    if (!isLogged) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const { user } = result;
          label.innerText = user.displayName;
          setButtonText(signOut);
          setIsLogged(true);
        });
    } else {
      firebase.auth().signOut().then(() => {
        label.innerText = '';
        setButtonText(signIn);
        setIsLogged(false);
      });
    }
  };
  return (
    <button
      className='main_menu-button login_btn'
      onClick={onClickHandler}
    >{buttonText}</button>
  );
};

export default SignInButton;
