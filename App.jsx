import React from 'react';
import { View, Text } from 'react-native';
import Greet from './Greet';
import Numbers from './Numbers';
import ExampleView from './reactcomponents/ExampleView';

const App = () => {
let count =0;
const addOne=()=>{
  count+=1;
}

addOne();
addOne();
const message = `Count değeri: ${count}`;
const person = { name: "Ali", age: 30 };

const {name , age }=person;


  return (
    <View style={{ flex: 1, flexDirection:'row',justifyContent:'space-between'}}>
    {/*   <Text>Hello World! ,{message} </Text>
      <Text> Merhaba ,benim adım {name} ve yaşım {age}</Text>
      <Greet/>
      <Numbers/> */}
<View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      <ExampleView/>
    </View>
  );
};

export default App;
