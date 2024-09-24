
// ---------- set Local Imports
import { initializeApp } from 'firebase/app';
console.log({ initializeApp });

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig, arrFuncs } = pass;

  // ---------- set Caps Inputs

  if (typeof fbConfig === 'object') {
    // ---------- set FB Init on a Variable
    const fbConfig2 = {
      apiKey: 'AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI',
      authDomain: 'devs-tests-95208.firebaseapp.com',
      projectId: 'devs-tests-95208',
      storageBucket: 'devs-tests-95208.appspot.com',
      messagingSenderId: '750912250366',
      appId: '1:750912250366:web:4629eac789a718a74220af',
    };

    const fbInit = initializeApp(fbConfig2);
    console.log({ fbInit });
    
    for (const currFunc of arrFuncs) {
      await currFunc(fbInit, args);
    }
  } else {
    console.log('fbConfig precisa ser um objeto', { fbConfig });
  }
};

