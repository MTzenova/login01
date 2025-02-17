import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons} from '@expo/vector-icons'
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbolName } from '../../components/ui/IconSymbol';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      
      <Tabs.Screen
        name="bbdd/index"
        options={{
          title: 'BBDD',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="server" color={color} />,
        }}
      />
      <Tabs.Screen
        name="desconectar/index"
        options={{
          title: 'Sign out',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="log-out" color={color} />,
        }}
      />
    </Tabs>
  );
}
