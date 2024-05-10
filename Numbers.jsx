import React from 'react';
import { View, Text } from 'react-native';

const Numbers = () => {
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5]; // Spread operatörü

  const sumNumbers = (...nums) => { // Rest operatörü
    return nums.reduce((acc, current) => acc + current, 0);
  };

  const total = sumNumbers(...newNumbers); // Spread ile değerleri fonksiyona aktarma

  return (
    <View>
      <Text>Toplam: {total}</Text>
    </View>
  );
};
export default Numbers;
