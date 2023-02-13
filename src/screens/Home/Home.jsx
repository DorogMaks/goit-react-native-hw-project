import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';

import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';

export const HomeTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <HomeTabs.Navigator initialRouteName={'Posts'}>
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 100,
                  backgroundColor: focused ? '#FF6C00' : '#ffffff',
                }}
              >
                <Ionicons
                  name="ios-grid-outline"
                  size={size}
                  color={focused ? '#ffffff' : '#bdbdbd'}
                />
              </View>
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#FF6C00' : '#ffffff',
              }}
            >
              <Ionicons
                name="ios-add"
                size={size}
                color={focused ? '#ffffff' : '#bdbdbd'}
              />
            </View>
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 100,
                backgroundColor: focused ? '#FF6C00' : '#ffffff',
              }}
            >
              <Feather
                name="user"
                size={size}
                color={focused ? '#ffffff' : '#bdbdbd'}
              />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </HomeTabs.Navigator>
  );
};
