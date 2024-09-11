import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClientProvider, QueryClient} from 'react-query';
import PWABadge from "./components/PWABadge/index.tsx";
import PWAIOSPrompt from 'react-ios-pwa-prompt'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <PWABadge/>
      <PWAIOSPrompt
        copyTitle="Instale o app no seu celular"
        copyDescription="Este site tem funcionalidade de app. Adicione-o à sua tela inicial para usar em tela cheia e offline."
        copyShareStep="Pressione o botão 'Compartilhar' no menu abaixo"
        copyAddToHomeScreenStep="Pressione 'Adicionar à tela de início'"
        promptOnVisit={1}
        timesToShow={10}
      />
    </QueryClientProvider>
  </React.StrictMode>,
)
