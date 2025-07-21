import { StyleSheet, Text, View } from "react-native";
import { theme } from "./themes/theme";

type ClassInfoProps = {
  theme: theme;
};

const ClassInfo = (props:ClassInfoProps) => {
    return(
        <View style={styles.flex}>
            <Text style={styles.icon}>B</Text>
            <View>
                <Text style={{color:props.theme.text, fontSize:13, fontWeight:500}}>BUISNESS CLASS</Text>
                <Text style={{color:'#0d6cb0', fontSize:13 }}>BOARDING: 11:00 PM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor:'#0d6cb0',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:7,
        fontSize:18,
        fontWeight: 600,
        color:'white'
    },
    flex:{
        flexDirection:'row',
        gap: 15
    }
})

export default ClassInfo;