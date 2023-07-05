import React,{useState} from 'react';
import { useWalletLogin } from '@lens-protocol/react-web';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useActiveWallet } from '@lens-protocol/react-web';
import { useWalletLogout } from '@lens-protocol/react-web';
import { getLens } from '../api/api';
import { useEffect } from 'react';

function LoginButton() {
  const [profile, setProfile] = useState(null)
  const { execute: login, error: loginError, isPending: isLoginPending } = useWalletLogin();

  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      await login(signer);
    }
  };
  const { data: wallet, loading } = useActiveWallet();
  const { execute: logout, isPending } = useWalletLogout();
  useEffect(() => {
    if (wallet) {
        getLens(wallet.address).then((resp) => setProfile(resp))
    }
  },[wallet])
  console.log(isConnected)
  try{
    console.log(wallet.address)
  } catch(e) {

  }
  
  return (
    <div>
        {wallet ? 
          <div className='login-access'>
              {profile}
              <div>
                <button onClick={() => {
                    logout()
                }}>
                  Logout
                </button>
              </div>
          </div>
         : 
        
        <button disabled={isLoginPending} onClick={onLoginClick} className="login-btn">
            <img src={require('../assets/images/logo-white.png')} alt="lens" />
            <p>Login</p>
        </button> 
        }
        
    </div>
  );
}

export default LoginButton