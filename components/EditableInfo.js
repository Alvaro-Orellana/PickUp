
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
               
                <Text style={styles.subtitleText}>{placeholder} :</Text>


                <Text  
                    onPress={handlePress}  
                    style={styles.editStyle}
                >
                    {textInputAllowsEditing ?  "Guardar": "Editar"}
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
        flex: 1
        
      },
    container2: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 40,
       
    },
    subtitleText: {
        color: "gray",
        fontSize: 16,
        fontWeight: '200',
    },
    editStyle:{
        color: "#3CB9F9",
        fontSize: 20,
        fontWeight: '500',
    },
    inputText: {
        height: 50,
        fontSize: 18,
        width: "100%",
        color: "black",
        paddingLeft: 7,
        borderBottomColor:'#3CB9F9',
        borderBottomWidth: 1  ,
        marginTop: 0
      },

})


export default EditableInfo;
