import React, {Component} from 'react';
import {Image} from 'react-native';
import Dashboard from '../dashboard/dashboardPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Credit from '../credit/creditPage';
import Ticket from '../ticket/ticket';
import Movie from '../movie/moviePage';
import Images from '../../assets/image/index';
import styles from './TabStyle';
const tab = createBottomTabNavigator();

export default class Tab extends Component {
  render() {
    return this.tabs();
  }

  options = (image) => {
    return <Image style={styles.tabIconStyle} source={image} />;
  };

  tabs = () => {
    return (
      <tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        initialRouteName={'Dashboard'}
        {...this.props}
        tabBarOptions={{
          style: {
            backgroundColor: 'white',
            justifyContent: 'flex-start',
          },
        }}>
        <tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              this.options(
                focused ? Images.home_selected : Images.home_unselected,
              ),
          }}
          name="Home"
          component={Dashboard}
        />
        <tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              this.options(
                focused ? Images.ticket_selected : Images.ticket_unselected,
              ),
          }}
          name="Ticket"
          component={Ticket}
        />
        <tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              this.options(
                focused ? Images.movie_selected : Images.movie_unselected,
              ),
          }}
          name="Movie"
          component={Movie}
        />
        <tab.Screen
          options={{
            tabBarIcon: ({focused}) =>
              this.options(
                focused ? Images.credit_selected : Images.credit_unselected,
              ),
          }}
          name="Credits"
          component={Credit}
        />
      </tab.Navigator>
    );
  };
}
