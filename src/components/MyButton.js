import React from 'react'
import { TouchableOpacity,Text, StyleSheet,Dimensions } from 'react-native'

const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={props.btnClick}>
            <Text style={styles.txtStyle}>{props.btnTitle}</Text>
        </TouchableOpacity>

    )
}
const styles=StyleSheet.create({
    btnContainer: {
        backgroundColor: '#ee8572',
        width: Dimensions.get('window').width/3,
        alignSelf: 'center',
        padding: 10,
        margin:10,
        alignItems:'center',
        borderRadius:25
    },
    txtStyle: {
        color:'#abf0e9',
        fontWeight:'bold',
        fontSize: 23
    }
})

export { MyButton }