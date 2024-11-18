// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { LAMPORTS_PER_SOL } from "@solana/web3.js";

// export function ShowSolBalance() {
//     const { connection } = useConnection();
//     const wallet = useWallet();

//     async function getBalance() { 
//         if (wallet.publicKey) {

//             const balance = await connection.getBalance(wallet.publicKey);
//             document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
//         }
//     }
    
//     getBalance();
//     return <div>
//         <p>SOL Balance:</p> <div id="balance"></div>
//     </div>
// }
import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    // Use state to store the balance
    const [balance, setBalance] = useState(0);

    // Fetch balance whenever the wallet's public key changes
    useEffect(() => {
        const getBalance = async () => { 
            if (wallet.publicKey) {
                const fetchedBalance = await connection.getBalance(wallet.publicKey);
                setBalance(fetchedBalance / LAMPORTS_PER_SOL); // Update state with SOL balance
            }
        };

        // Call getBalance initially and whenever wallet changes
        if (wallet.publicKey) {
            getBalance();
        }
    }, [wallet.publicKey, connection]); // Dependency array to trigger on wallet.publicKey change

    return (
        <div>
            <p>SOL Balance:</p>
            <div>{balance}</div>
        </div>
    );
}
