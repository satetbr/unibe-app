||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/7c1dc232-1554-47d8-9408-be912bc04126) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/1e610a79-0df1-4c6f-82e5-11d3bdb5aa21) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/5c489b09-353b-4b0b-9dd3-9f78efe4823a) |

||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/684d4aaa-ee09-4e1e-8d4d-35ffe564a28c) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/a7b1cf08-d89f-4169-8383-c6da0fe3b2d1) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/ef02feb3-64fe-4fd9-82e2-fae1f1849d57) |

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
