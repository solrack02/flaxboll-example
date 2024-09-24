
// import * as firebase from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
// import * as firestore from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';
import { initializeApp } from 'firebase/app';
import firestore from 'firebase/firestore';

// type Tprops = {
//   args: any;
//   pass: {
//     fbInit: any;
//     arrRefStrings: string[];
//     arrWhere: any;
//     arrFuncs: any[];
//   };
// };

// export const css1 =
//   'color: green; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
// export const css2 =
//   'color: yellow; background-color: green; font-size: 10px; padding: 2px 6px; border-radius: 3px';

// export const where = async (props: Tprops) => {
export const where = async () => {
  // console.log('where', firebase, firestore);
  console.log('where', initializeApp);
  //   const { initializeApp } = firebase;
  //   const { getFirestore, collection, getDocs } = firestore;

  //   console.log('Script 2');
  //   console.log(initializeApp);
  //   // Configurações do Firebase
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI',
  //     authDomain: 'devs-tests-95208.firebaseapp.com',
  //     projectId: 'devs-tests-95208',
  //     storageBucket: 'devs-tests-95208.appspot.com',
  //     messagingSenderId: '750912250366',
  //     appId: '1:750912250366:web:4629eac789a718a74220af',
  //   };

  //   // Inicializar o Firebase
  //   const initFb = initializeApp(firebaseConfig);
  //   console.log({ initFb });

  //   // Inicializar o Firestore
  //   const db = getFirestore(initFb);
  //   console.log({ db });

  //   const refColl = collection(db, 'users');
  //   console.log({ refColl });
};

