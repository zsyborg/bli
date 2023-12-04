import { useNavigate } from "react-router-dom";
import coinIcon from "./assets/coinflip/coin.png";
import diceIcon from "./assets/dice/dice-logo.png";
import { Typography } from "@mui/material";
import { useEffect, useState, useContext, useCallback } from "react";
``
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);



function App() {
  // const { autoConnect, setAutoConnect } = useAutoConnect();
  const navigate = useNavigate();
  // let { publicKey, connected, disconnect } = useWallet();

  
  useEffect(() => {

  }, [connected, disconnect])



  const handleCoinClick = () => {
    navigate("/coinflip");
  };

  const handleDiceClick = () => {
    navigate("/dice");
  };

  return (
    <>
      <ContextProvider>
      <div>

        <img
          onClick={handleCoinClick}
          src={coinIcon}
          className="logo"
          alt="coin"
        />
        <img
          onClick={handleDiceClick}
          src={diceIcon}
          className="logo"
          alt="dice"
        />
      </div>
      <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
      <Typography variant="button" display="block">
        Choose your Game
      </Typography>
      <Typography sx={{ margin: "10px" }} variant="h5">
        Click on the Game Icon to start
      </Typography>
      </ContextProvider>
      </>
  );
}

export default App;
