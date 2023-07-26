import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Platform, Pressable } from 'react-native';

import BtnSwitchTheme from '@/components/BtnSwitchTheme';
import Colors from '@/constants/Colors';
import { useThemeContext } from '@/contexts/ThemeContext';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function MenuIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme } = useThemeContext();
  console.log(Platform.OS);

  if (Platform.OS === 'web') {
    return (
      <>
        <Drawer
          screenOptions={({ navigation }) => ({
            drawerType: 'front',
            headerLeft: () => (
              <Pressable onPress={navigation.toggleDrawer}>
                <FontAwesome
                  size={28}
                  name="bars"
                  color={Colors[theme ?? 'light'].text}
                  style={{ marginLeft: 20 }}
                />
              </Pressable>
            ),
            headerRight: () => <BtnSwitchTheme />,
          })}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Home',
              drawerIcon: ({ color }) => <MenuIcon name="home" color={color} />,
            }}
          />
          <Drawer.Screen
            name="forms"
            options={{
              drawerLabel: 'Forms',
              title: 'Forms',
              drawerIcon: ({ color }) => <MenuIcon name="code" color={color} />,
            }}
          />
        </Drawer>
      </>
    );
  } else if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[theme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <MenuIcon name="home" color={color} />,
            headerRight: () => <BtnSwitchTheme />,
          }}
        />
        <Tabs.Screen
          name="forms"
          options={{
            headerShown: false,
            title: 'Forms',
            tabBarIcon: ({ color }) => <MenuIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    );
  }
}
