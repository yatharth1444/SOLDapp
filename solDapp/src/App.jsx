    import React, {useMemo} from 'react';
    import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
    import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
    import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
    import {
        WalletModalProvider,
        WalletDisconnectButton,
        WalletMultiButton,
    } from '@solana/wallet-adapter-react-ui';
    import { clusterApiUrl } from '@solana/web3.js';

    // Default styles for Wallet Adapter
    import '@solana/wallet-adapter-react-ui/styles.css';

    import { Airdrop } from './Airdrop';
    import { ShowSolBalance } from './UserBalance';



    function App() {
        const network = WalletAdapterNetwork.Devnet;

        // Set up Solana network and wallet adapters
        const endpoint = "https://solana-devnet.g.alchemy.com/v2/pT1A1puyBC-9s9Spem4ZzO05NsC5TzVV";
        const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);

        return (
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <h1>Solana DApp</h1>
                            <WalletMultiButton />
                            <WalletDisconnectButton />
                        
                            <ShowSolBalance />
                            <Airdrop />
                        </div>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        );
    }

    export default App;
