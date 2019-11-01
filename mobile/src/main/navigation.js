import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from '../components/home'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'

const drawerNavigator = createDrawerNavigator({
    home: {
        screen: Home,
        navigationOptions: { title: 'Home' }
    },
    signIn: {
        screen: SignIn,
        navigationOptions: { title: 'Entrar' }
    },
    signUp: {
        screen: SignUp,
        navigationOptions: { title: 'Criar Conta' }
    }
})

export default createAppContainer(drawerNavigator)