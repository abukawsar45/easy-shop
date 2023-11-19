import AuthContext from "@/contexts/AuthContext"
import { useContext } from "react"



const useAuth = async () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window !== 'undefined';

  if (!isClient && !auth) return {};

  if (!auth) {
    throw new Error(
      'you must wrap your application with AuthProvider to use the useAuth'
    );
  }
  return auth;
};

export default useAuth;