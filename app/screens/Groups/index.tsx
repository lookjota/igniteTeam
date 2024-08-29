import { StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
