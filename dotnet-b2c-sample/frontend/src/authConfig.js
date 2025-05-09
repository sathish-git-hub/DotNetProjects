export const msalConfig = {
  auth: {
    clientId: "your-frontend-client-id",
    authority: "https://yourtenant.b2clogin.com/yourtenant.onmicrosoft.com/B2C_1_signupsignin",
    knownAuthorities: ["yourtenant.b2clogin.com"],
    redirectUri: "/"
  }
};

export const loginRequest = {
  scopes: ["https://yourtenant.onmicrosoft.com/api/api.read"]
};