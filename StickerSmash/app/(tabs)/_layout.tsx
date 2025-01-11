import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#00C853',  // Green active color
                tabBarInactiveTintColor: '#666',   // Gray inactive icons color
                headerStyle: {
                    backgroundColor: '#f5f5f5',     // Header background color
                },
                headerShadowVisible: false,
                headerTintColor: '#000',
                tabBarStyle: {
                    backgroundColor: '#e8f5e9',    // Light green background for the tab bar
                    borderRadius: 20,              // Rounded tab bar corners
                    marginHorizontal: 10,
                    marginBottom: 10,
                    height: 60,
                },
                tabBarItemStyle: {
                    padding: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
