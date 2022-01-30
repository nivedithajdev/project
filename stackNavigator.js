import React from "react"

import{createStackNavigator} from "@react-navigation/stack"
import Home from "../screens/Home"
import Home from "../screens/Create"
const Stack = createStackNavigator()

const MainStackNavigator=()=>{
return(
<Stack.Navigator
screenOptions={{
headerStyle:{
backgroundColor:"purple"
},
headerTintColor :"white",
headerBackTitle :"Back"
}}>
<Stack.screen name="Home" component={Home}/>
<Stack.screen name="Create " component ={Create }/>
    
</Stack.Navigator>

)
}
export default DrawerNavigator 


