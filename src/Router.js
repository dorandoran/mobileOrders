import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import MaterialScreen from './screens/MaterialScreen';
import MaterialCreateScreen from './screens/MaterialCreateScreen';
import MaterialEditScreen from './screens/MaterialEditScreen';
import ProfileScreen from './screens/ProfileScreen';

const RouterComponent = () => {
    return (
        <Router 
            sceneStyle={{paddingTop: Platform.OS === 'android' ? 12 : 0}}
            backButtonTextStyle={{ color: '#fff' }}
            rightButtonTextStyle={{ color: '#fff' }}
            leftButtonTextStyle={{ color: '#fff' }}
            titleStyle={styles.title}
            navigationBarStyle={{backgroundColor:'#0d528d'}}
            titleWrapperStyle={styles.container}
            navigationBarBackgroundImageStyle={{ color: 'rgba(0,0,0,0)'}}
        >
            <Scene key='root' hideNavBar={true} >

                <Scene key='login' hideNavBar={true} component={AuthScreen} />

                <Scene key='main'>

                    <Scene 
                        key='materials' 
                        component={MaterialScreen} 
                        title='Material Request'
                        onRight={() => Actions.materialCreate()}
                        rightTitle='New'
                        onLeft={() => Actions.profile()}
                        leftTitle='Profile'
                        initial
                    />
                    <Scene 
                        key='materialCreate'
                        title='New Material Request'
                        component={MaterialCreateScreen}
                        lazy={true}
                    />

                    <Scene 
                        key='materialEdit'
                        title='Edit Order'
                        component={MaterialEditScreen}
                    />

                    <Scene
                        key='profile'
                        title='Profile'
                        component={ProfileScreen}
                    />

                </Scene>
                
            </Scene>
        </Router>
    );
};

const styles = {
    title: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'white',
        alignSelf: 'center'
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
}

export default RouterComponent;