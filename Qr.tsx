import { Image, StyleSheet, View } from 'react-native';

const Qr = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/QR.png')} style={[styles.img, {backgroundColor:'white'}]} />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center'
    },
    img:{
        bottom:170,
        height:130,
        width:130,
        borderRadius:15
    }
})
export default Qr;
