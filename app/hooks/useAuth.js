import { useContext } from "react";
import { AuthContext } from "../contexts";

export function useAuth() {
    const { auth, setAuth, fevPath, setFevPath } = useContext(AuthContext);

    return { auth, setAuth, fevPath, setFevPath };
}
