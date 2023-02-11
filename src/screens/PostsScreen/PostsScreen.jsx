import { createStackNavigator } from '@react-navigation/stack';
import { CommentsScreen } from '../CommentsScreen/CommentsScreen';
import { DefaultScreen } from '../DefaultScreen/DefaultScreen';
import { MapScreen } from '../MapScreen/MapScreen';

const PostsStack = createStackNavigator();

export const PostsScreen = () => {
  return (
    <PostsStack.Navigator initialRouteName="Default">
      <PostsStack.Screen
        options={{ headerShown: false }}
        name="Default"
        component={DefaultScreen}
      />
      <PostsStack.Screen
        options={{ headerShown: false }}
        name="Comments"
        component={CommentsScreen}
      />
      <PostsStack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
    </PostsStack.Navigator>
  );
};
