import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from '../../components/home'
import SignIn from '../../components/signIn'
import SignUp from '../../components/signUp'

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: { title: 'Home',  }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: { title: 'Entrar', params: { test: 'op.gg' } }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: { title: 'Criar Conta' }
    }
}, { initialRouteName: 'Home' })

export default createAppContainer(drawerNavigator)