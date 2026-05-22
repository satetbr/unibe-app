# Unibe App

Um aplicativo mobile desenvolvido com React Native e Expo para a plataforma Unibe, oferecendo autenticação, navegação tabbed e gerenciamento de dados com Firebase.

## 📋 Características

- ✅ Autenticação segura com Firebase
- 📱 Interface responsiva com React Navigation
- 📊 Tabelas e componentes de dados
-  Suporte multiplataforma (iOS, Android, Web)
- 👤 Gerenciamento de perfil de usuário
- 🔐 Hash SHA256 para segurança

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

## 🚀 Comandos

```bash
# Iniciar o servidor Expo
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar no Web
npm run web
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

## 🎨 Temas e Estilos

O aplicativo utiliza estilos localizados em cada componente (`style.js`) com React Native puro para construir a interface.

## 💡 Contexto Global (dados.js)

O arquivo `src/contexts/dados.js` gerencia o estado global da aplicação, permitindo compartilhar dados entre componentes sem prop drilling.

## � Segurança - SHA256

As senhas são automaticamente codificadas em **SHA256** (implementado via biblioteca `js-sha256`) durante o processo de login, antes de serem validadas no Firebase. Esta implementação ocorre em [src/components/Login/index.js](src/components/Login/index.js) e garante que senhas nunca são transmitidas em texto plano.

## �🐛 Troubleshooting

**Erro: "Firebase configuration not found"**
- Verifique se `src/config/firebaseconfig.js` está configurado corretamente

**Erro: "Module not found"**
- Execute `npm install` novamente
- Limpe o cache: `expo clear`

**Build falha no Android/iOS**
- Limpe o cache do Expo: `expo start -c`
- Verifique compatibilidade de versões do React Native
