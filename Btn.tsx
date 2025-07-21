import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type BtnProps = {
    onPress : () => void
}
const Btn = (props:BtnProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>Change Theme</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#948b90ff',
    opacity:0.6,
    borderRadius: 8,
    alignItems: 'center',
    position:'absolute',
    right:20,
    bottom:10
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Btn;
