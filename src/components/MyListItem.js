import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text, Dimensions} from 'react-native'

const MyListItem = (props) =>{

    //style check for done and undone list items
    let styles=props.myData.isDone ? doneStyles : undoneStyles

    return(
        <TouchableOpacity onPress={props.myPress}>
            <View style={styles.container}>
                <View style={{flexDirection: "row", alignItems:"center"}}>
                    <View style={styles.dot}/>
                    <Text style={styles.text}>{props.myData.myEntry}</Text>
                </View>
                {props.myData.isDone && <Text> Completed! </Text>}
            </View>
        </TouchableOpacity>
    )
}

const doneStyles= StyleSheet.create({

    container: {
        backgroundColor: "#ff8a65",
        margin:5,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    text: {
        fontSize: 20,
        marginLeft:10,
        textDecorationLine: 'line-through'
    },

    dot: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width / 40,
        height: Dimensions.get('window').height / 80,
        borderRadius: 10
    }
})

const undoneStyles= StyleSheet.create({

    container: {
        backgroundColor: "#aed581",
        margin:5,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    text: {
        fontSize: 20,
        marginLeft:10,
    },

    dot: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width / 40,
        height: Dimensions.get('window').height / 80,
        borderRadius: 10
    }


})

export { MyListItem }