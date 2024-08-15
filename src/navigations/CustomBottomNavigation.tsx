import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/home';

// const HomeScreen = () => <Text>Inicio</Text>;
// Uncomment and define other screens as needed
// const Agenda = () => <Text>Agenda</Text>;

const CustomBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Inicio',
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
    },
    // Uncomment and add more routes if necessary
    // {
    //   key: 'agenda',
    //   title: 'Agenda',
    //   focusedIcon: 'calendar',
    //   unfocusedIcon: 'calendar-outline',
    // },
    // {
    //   key: 'maps',
    //   title: 'Mapa',
    //   focusedIcon: 'location',
    //   unfocusedIcon: 'location-outline',
    // },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    // agenda: Agenda,
    // maps: MapScreen,
  });

  const renderIcon = ({route, focused, color}: any) => {
    const iconName = focused ? route.focusedIcon : route.unfocusedIcon;
    return <Ionicons name={iconName} size={24} color={color} />;
  };

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
    />
  );
};

export default CustomBottomNavigation;
