import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const FixedDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (newDimensions) => {
      setWindowDimensions(newDimensions.window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Window Width: {windowDimensions.width}</Text>
      <Text>Window Height: {windowDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FixedDimensions; 