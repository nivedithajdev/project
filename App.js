import * as React from "react"
import DrawerNavigator from "./navigation/DrawerNavigator"
import{NavigationContainer}from "@react-navigation/native"
import{MainStackNavigator}from "./navigation/stackNavigator"

export default function App(){
return(
<NavigationContainer>
<DrawerNavigator/>
</NavigationContainer>
)
}
