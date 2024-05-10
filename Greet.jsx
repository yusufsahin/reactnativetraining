import React from'react';
import {View, Text} from "react-native";

const Greet=({name="John",greeting="Merhaba"})=>{


    return (
    <View>
      <Text>{`${greeting} ,${name}!`}</Text> 
    </View>
    );
};

export default Greet;