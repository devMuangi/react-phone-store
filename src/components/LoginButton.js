import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) return  (
       <React.Fragment>
  <button onClick={() => loginWithRedirect()}>{user.name}</button>
  {/* <ProductList/> */}
  </React.Fragment>);

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;