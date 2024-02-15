import { createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";


export const WebSocketContext = createContext<Socket | null>(null);

export const WebSocketProvider = ({ children }: {
    children: React.ReactNode
}) => {

    const [websocket, setWebsocket] = useState<Socket | null>(null);

    useEffect(() => {
        // url 변경 필요
        const socket = io("http://localhost:3000", {
            transports: ["websocket"],
        });

        setWebsocket(socket);

        return () => {
            if (socket) {
                socket.disconnect();
            }
        }
    }, [])

    return (
        <WebSocketContext.Provider value={websocket}>
            {children}
        </WebSocketContext.Provider>
    )
}