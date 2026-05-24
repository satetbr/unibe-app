# Unibe App

Um aplicativo mobile desenvolvido com React Native e Expo para a plataforma Unibe, oferecendo autenticação, navegação tabbed e gerenciamento de dados com Firebase.

## 📋 Características

- ✅ Autenticação segura com Firebase
- 📱 Interface responsiva com React Navigation
- 📊 Tabelas e componentes de dados
- 👤 Gerenciamento de perfil de usuário

## 🛠️ Tecnologias

- **Framework**: React Native 0.74.1
- **Bundler**: Expo 51.0.8
- **Navegação**: React Navigation v6
- **Banco de Dados**: Firebase Realtime Database
- **Autenticação**: Firebase Authentication
- **Ícones**: React Native Feather, React Native Vector Icons
- **Utilitários**: js-sha256 para codificação de senhas

## 📦 Instalação

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

### Passos

1. **Clone o repositório**
```bash
git clone <repository-url>
cd unibe
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o Firebase**
- Edite `src/config/firebaseconfig.js` com suas credenciais do Firebase
- Certifique-se de que as rules do Firebase estão configuradas corretamente

4. **Inicie o aplicativo**
```bash
npm start
```


## 📁 Estrutura do Projeto

```
unibe/
├── src/
│   ├── components/
│   │   ├── Login/          # Tela de autenticação
│   │   ├── Menu/           # Menu principal
│   │   ├── Perfil/         # Perfil do usuário
│   │   ├── Table/          # Componente de tabela
│   │   ├── DropDown/       # Seletor dropdown
│   │   ├── Load/           # Componente de carregamento
│   │   └── Soon/           # Componentes em desenvolvimento
│   ├── contexts/
│   │   └── dados.js        # Context API para gerenciamento de estado
│   └── config/
│       └── firebaseconfig.js # Configuração do Firebase
├── assets/                 # Imagens e assets estáticos
├── App.js                  # Arquivo principal
├── app.json               # Configuração do Expo
├── package.json           # Dependências do projeto
└── babel.config.js        # Configuração do Babel
```

## 🔐 Configuração do Firebase

Antes de usar o aplicativo, configure suas credenciais do Firebase em `src/config/firebaseconfig.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 📱 Componentes Principais

### Login
Tela de autenticação com Firebase. As senhas são automaticamente codificadas em **SHA256** antes de serem enviadas para autenticação, garantindo segurança.

### Menu
Página principal com navegação tabbed para acesso aos diferentes módulos.

### Perfil
Tela de gerenciamento do perfil do usuário com opção de atualizar informações.

### Table
Componente para exibição de dados em formato tabular.

### Load
Componente de indicador de carregamento.

## 💡 Contexto Global (dados.js)

O arquivo `src/contexts/dados.js` gerencia o estado global da aplicação, permitindo compartilhar dados entre componentes sem prop drilling.


||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/7c1dc232-1554-47d8-9408-be912bc04126) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/1e610a79-0df1-4c6f-82e5-11d3bdb5aa21) | ![alt text](https://github.com/satetbr/unibe-app/assets/156530052/5c489b09-353b-4b0b-9dd3-9f78efe4823a) |

||||
|:---:|:---:|:---:|
| ![alt text](https://github.com/user-attachments/assets/17c8ccce-b659-469c-be7a-f942ae979db4) | ![alt text](https://github.com/user-attachments/assets/3ca1b05e-7797-4b55-a483-f4afddce2ee3) | ![alt text](https://github.com/user-attachments/assets/ae569de8-0e91-4aff-9962-192925bdc84a) |
