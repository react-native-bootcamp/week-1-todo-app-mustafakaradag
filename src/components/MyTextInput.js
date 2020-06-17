import React from 'react'
import { View, TextInput, StyleSheet,Dimensions } from 'react-native'

const MyTextInput =(props) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                multiline={true}
                textAlignVertical='top'
                placeholder={props.pHolder}
                keyboardType={props.keyType}
                autoCapitalize={props.capitalize}
                onChangeText={props.txtChange}            
            />
        </View>
    )
}
const styles=StyleSheet.create({
    inputContainer: {
        backgroundColor: '#abf0e9',
        width: Dimensions.get('window').width*0.75,
        padding:10,
        margin:15,
        borderRadius:25,
        alignSelf:'center'
        
    }
})


export { MyTextInput }