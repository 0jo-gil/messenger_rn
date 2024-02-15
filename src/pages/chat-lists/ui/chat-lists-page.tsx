import { SafeAreaView, Text } from "react-native"
import { ChatListItem } from "../../../entities/chat-lists"

export const ChatListsPage = () => {
    return (
        <SafeAreaView>
            <Text>hihihihi</Text>
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <ChatListItem key={index} />
                ))
            }
        </SafeAreaView>
    )
}