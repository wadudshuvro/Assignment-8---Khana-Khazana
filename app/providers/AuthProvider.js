"use client";

import { useState } from "react";
import { AuthContext } from "../contexts";

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [fevPath, setFevPath] = useState(null);
    return (
        <AuthContext.Provider value={{ auth, setAuth, fevPath, setFevPath }}>
            {children}
        </AuthContext.Provider>
    );
}
