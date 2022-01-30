import React from "react"

import{createDrawerNavigator} from "@react-navigation/drawer"

import {ContactStackNavigator } from "./stackNavigator"

import TabNavigator from "./tabNavigator"

const Drawer= createDrawerNavigator()

const DrawerNavigator=()=>{
return(
<Drawer.Navigator >
<Drawer.Screen name="Home" component ={TabNavigator }/>
<Drawer.Screen name="Create" component ={ContactStackNavigator }/>
</Drawer.Navigator>
)
}
export default DrawerNavigator 




