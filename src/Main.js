import React, {useState}  from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'

import {MyTextInput, MyButton, MyListItem} from './components'

const Main = () =>{
    const [entry, setEntry] = useState("")
    const [list, setList] = useState([])
    
    const changeText= (text) => { setEntry(text); }
    const addToList= () => {
        let newList=[...list]
        newList.push({myEntry: entry, isDone : false})
        setList(newList)        
    }
    function updateStatus(item) {
        let updateList=[...list]
        updateList[item].isDone = !updateList[item].isDone
        setList(updateList)
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#63b7af'}}>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={({item, index}) =>( <MyListItem myData={item} myPress={() => updateStatus(index)} />)}                
                />
                <View>
                    <MyTextInput pHolder="Would you like to write something?" txtChange={changeText} />
                    <MyButton btnTitle="Add to List" btnClick={addToList} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Main