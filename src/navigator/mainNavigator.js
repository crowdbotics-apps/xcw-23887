import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList193815Navigator from '../features/ArticleList193815/navigator';
import ArticleList193814Navigator from '../features/ArticleList193814/navigator';
import ArticleList193813Navigator from '../features/ArticleList193813/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList193815: { screen: ArticleList193815Navigator },
ArticleList193814: { screen: ArticleList193814Navigator },
ArticleList193813: { screen: ArticleList193813Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
