import React from "react";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

if (!apiServerUrl) {
  throw new Error("Missing environment variables.");
}

const dotenv = {
  apiServerUrl: apiServerUrl,
};

export const EnvContext = React.createContext(dotenv);

export const useEnv = () => {
  const context = React.useContext(EnvContext);
  if (!context) {
    throw new Error(`useEnv must be used within a EnvProvider`);
  }
  return context;
};

export const EnvProvider = (props) => {
  return <EnvContext.Provider value={dotenv} {...props} />;
};
