||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/7c1dc232-1554-47d8-9408-be912bc04126) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/1e610a79-0df1-4c6f-82e5-11d3bdb5aa21) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/5c489b09-353b-4b0b-9dd3-9f78efe4823a) |

||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/cbe10262-e3fd-4dd4-a721-49cae9e396b5) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/db3873a3-3afe-42be-b62c-4ac2b4e425ae) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/22d5441b-7030-422f-a172-523c6e61dc56) |

<br/><br/><br/><br/>
# ATENÇÃO!!!
O repositório esta sem o arquivo "src/config/firebaseconfig.js"</br>
Ao criar o arquivo, ele deve conter a sua apiKey do firebase da seguinte forma:
<br/><br/>

    import firebase from 'firebase/compat/app';
    import 'firebase/compat/firestore';
    import "firebase/compat/storage"
    
    const firebaseConfig = {
      INSIRA AQUI AS SUAS KEYS
    };
    
    firebase.initializeApp(firebaseConfig);
    
    export default firebase
