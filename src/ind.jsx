import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'
import { LensConfig, development } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import { LensProvider } from '@lens-protocol/react-web';



const Ind = () => {
    const { provider, webSocketProvider } = configureChains([polygon, mainnet], [publicProvider()]);

    const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
    });

    const lensConfig = {
        bindings: wagmiBindings(),
        environment: development,
      };
    return(
        <WagmiConfig client={client}>
            <LensProvider config={lensConfig}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </LensProvider>
        </WagmiConfig>
        // <WagmiConfig client={client}>
        //     <BrowserRouter>
        //         <App />
        //     </BrowserRouter>
        // </WagmiConfig>
    )
}

export default Ind;