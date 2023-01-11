import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/Signup';
import DashBoard from '../screens/DashBoard';
import Cancel from '../screens/Cancel';
import Profile from '../screens/Profile';
import WishList from '../screens/WishList';
import Package from '../screens/Package';
import Update from '../screens/Update';
import Notification from '../screens/Notification';
import CarPark from '../screens/CarPark';
import EditProfile from '../screens/EditProfile';
import ResetPassword from '../screens/ResetPassword';
import Time from '../screens/Time';
import Sample from '../screens/Sample';
import CarDetail from '../screens/CarDetail';
import PaymentMethod from '../screens/PaymentMethod';
import AccountInfo from '../screens/AccountInfo';

import CarAdded from '../screens/CarAdded';
import WishListData from '../screens/WishListData';
import WishListTime from '../screens/WishListTime';
import WishListTimeEnd from '../screens/WishListTimeEnd';

import EndCarTime from '../screens/EndCarTime';
import UpdateScreen from '../screens/UpdateScreen';
import UpdateScreenEndTime from '../screens/UpdateScreenEndTime';
import ForgetPassword from '../screens/ForgetPassword';
import OTP from '../screens/OTP';
import NewPasword from '../screens/NewPasword';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signin'
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='EndCarTime'
          component={EndCarTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OTP'
          component={OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NewPasword'
          component={NewPasword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='DashBoard'
          component={DashBoard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='AccountInfo'
          component={AccountInfo}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='WishListTime'
          component={WishListTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WishListTimeEnd'
          component={WishListTimeEnd}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='CarAdded'
          component={CarAdded}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PaymentMethod'
          component={PaymentMethod}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Package'
          component={Package}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signup'
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='CancelSlot'
          component={Cancel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='time'
          component={Time}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='carPark'
          component={CarPark}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Wishlist'
          component={WishList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WishListData'
          component={WishListData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CarDetail'
          component={CarDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Updatetime'
          component={Update}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='UpdateScreenEndTime'
          component={UpdateScreenEndTime}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='UpdateScreen'
          component={UpdateScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Notification'
          component={Notification}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='EditProfile'
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
