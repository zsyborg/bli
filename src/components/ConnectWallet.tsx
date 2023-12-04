// import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const ConnectWallet = () => {
  return (
    <div className='flex items-center pt-40 justify-center flex-col'>
      <img src={require('../assets/img/wallet.png')} className='w-14' alt="" />
      <p className='text-xl font-bold mt-3 text-center text-white'>Please connect your wallet to continue !!!</p>
      <div className='connectWalletBtn mt-5'>
        <WalletMultiButton />
      </div>
    </div>
  )
}


export default ConnectWallet