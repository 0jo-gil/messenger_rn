import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { ChatListsPage } from "../pages/chat-lists";

const RootStack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="ChatLists">
                <RootStack.Screen name="ChatLists" component={ChatListsPage} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}