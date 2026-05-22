||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/7c1dc232-1554-47d8-9408-be912bc04126) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/1e610a79-0df1-4c6f-82e5-11d3bdb5aa21) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/5c489b09-353b-4b0b-9dd3-9f78efe4823a) |

|:---:|:---:|:---:|
| ![alt text](https://github.com/user-attachments/assets/17c8ccce-b659-469c-be7a-f942ae979db4) | ![alt text](https://github.com/user-attachments/assets/3ca1b05e-7797-4b55-a483-f4afddce2ee3) | ![alt text](https://github.com/user-attachments/assets/ae569de8-0e91-4aff-9962-192925bdc84a) |

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
