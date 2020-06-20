
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const EditableInfo = ({onChangeText, value, placeholder, saveData}) => {

    const [textInputAllowsEditing, setTextInputAllowsEditing] = useState(false);


    function handlePress() {
        //Guarda los datos si el usuario presiona save
        //Por ahora funciona pero se tiene que mejorar, hacer mas eficiente
        if(textInputAllowsEditing) {
            saveData()            
        }
        setTextInputAllowsEditing(!textInputAllowsEditing) 
        
    }


    return (

       <View style={styles.container} >
            <View style={styles.container2}>
               
                <Text style={styles.subtitleText}>{placeholder} :                                                       </Text>


                <Text  
                    onPress={handlePress}  
                    style={styles.editStyle}
                >
                    {textInputAllowsEditing ?  "Save": "Edit"}
                </Text>  

            </View>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                style={styles.inputText}
                onChangeText={onChangeText}
                value={value}
                editable={textInputAllowsEditing}
            />
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    
      },
    container2: {
        flexDirection: "row",
        paddingTop: 40,
        paddingHorizontal: 50
    },
    subtitleText: {
        color: "gray",
        fontSize: 16,
        fontWeight: '200',
    },
    inputText: {
        height: 50,
        fontSize: 18,
        width: "85%",
        color: "black",
        paddingLeft: 7,
        borderBottomColor:'black',
        borderBottomWidth: 1  ,
        marginTop: 0
      },
    editStyle:{
        color: "#3CB9F9",
        fontSize: 17,
        fontWeight: '500',
    }
})


export default EditableInfo;
