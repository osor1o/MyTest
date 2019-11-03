import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Profile from '../../components/profile'

const drawerNavigator = createDrawerNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: { title: 'Perfil' }
    },
    LogOut: {
        screen: Profile,
        navigationOptions: { title: 'Sair' }
    }
}, { initialRouteName: 'Profile' })

export default createAppContainer(drawerNavigator)