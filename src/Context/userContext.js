import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({children}) => {
  const userInitialState = undefined;

  const [user, setUser] = useState(userInitialState);

  const signIn = (userData) => setUser(userData);

  const signOut = () => setUser(userInitialState);
    
    return(
        <userContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </userContext.Provider>
      )
}

export default UserContextProvider;