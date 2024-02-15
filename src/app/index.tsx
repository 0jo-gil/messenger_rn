import { SafeAreaView, Text } from "react-native";
import { Routes } from "./routes";
import { WebSocketProvider } from "../shared/lib/websocket-context";

export default function App() {
    return (
        <WebSocketProvider>
            <Routes />
        </WebSocketProvider>
    )
}