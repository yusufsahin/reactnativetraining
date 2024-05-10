import React from "react";
import { View,Text, Image } from "react-native";

const ExampleView=()=>{

return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Merhaba, React Native View</Text>
        <Text style={{fontSize:20,color:'blue'}}>Metin Örneği</Text>
        
        <Image source ={{uri :'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FoS20162016_0624_132444AA_%2827785299372%29.jpg/1200px-FoS20162016_0624_132444AA_%2827785299372%29.jpg'}}
        style={{ width:300,height:300}}
        />
          
        
    </View>
)

}

export default ExampleView;