import React from 'react';
import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function SignInButton() {
  const { instance } = useMsal();
  return (
    <button onClick={() => instance.loginPopup(loginRequest)}>
      Sign in
    </button>
  );
}

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <SignInButton />
    </MsalProvider>
  );
}

export default App;