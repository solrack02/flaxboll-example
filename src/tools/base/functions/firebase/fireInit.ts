
// ---------- set Local Imports
import { initializeApp, firebase } from 'firebase/app';
console.log({ initializeApp });

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig, arrFuncs } = pass;

  // ---------- set Caps Inputs

  if (typeof fbConfig === 'object') {
    // ---------- set FB Init on a Variable
    const fbInit = initializeApp(fbConfig, 'secondary');
    const db = firebase.firestore();
    console.log({ fbInit });
    console.log({ db });
    for (const currFunc of arrFuncs) {
      await currFunc(db, args);
    }
  } else {
    console.log('fbConfig precisa ser um objeto', { fbConfig });
  }
};

