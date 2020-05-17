import './_store/store';
import './main/app';
import './index.css';
import firebaseConfig from './_configs/firebaseConfig';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
