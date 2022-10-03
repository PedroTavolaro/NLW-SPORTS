import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../Screens/Home';

import { Game } from '../Screens/Game';
import { SignIn } from '../Screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name='Home'
                component={Home}
            />

            <Screen 
                name='game'
                component={Game}
            />
        </Navigator>
    )
}