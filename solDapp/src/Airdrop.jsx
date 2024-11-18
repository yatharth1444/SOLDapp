import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";

//componenets in react are very similar to creating your own html tags
//the use wallet 'Hook" provides the wallet variable inside the Airdrop 'Component'
//
export function Airdrop() {
    //hooks in react
    const wallet = useWallet();
    const {connection} = useConnection();
    //alert(wallet.publicKey.toString())
    // line 10 rendering this java script variable 
    //beacuse i wrapped the airdrop component inside the  WalletProvider 
    async function sendAirdropToUser() {
      //  define the function inside the component body
      const amount = document.getElementById("publickey").value
   
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
           alert("airdropped sol")
    }
    return <div>
      
        <input id="publickey" type="text" placeholder="Amount" />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
       </div>
}