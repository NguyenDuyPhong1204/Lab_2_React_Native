import React, { memo, useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { UserType } from "./Main";

interface HeaderType {
    onUpdate: (user: UserType) => void,
    onClickChangeFooterColor: () => void,
}

export const Body: React.FC<HeaderType> = memo(props => {
    const { onUpdate, onClickChangeFooterColor } = props;

    const [name, setName] = useState('');
    const [linkAvatar, setLinkAvatar] = useState('');

    const handChangeInfor = () => {
        if (name.length > 0 && linkAvatar.length > 0) {
            onUpdate({
                name,
                avatar: linkAvatar
            })
            setName('');
            setLinkAvatar('');
            ToastAndroid.show("Cập nhật thành công",ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Vui lòng nhập dữ liệu", ToastAndroid.SHORT);
        }
    }
    return (
       
       <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <View style={styles.container}>
            <View style={{padding: 10}}>
                <Text style={styles.styleText}>Name</Text>
                <TextInput style ={styles.textInputStyle} value={name} onChangeText={setName} placeholder="Nhập tên của bạn" />
                
                
                <Text style={styles.styleText}>Link avatar</Text>
                <TextInput style={styles.textInputStyle} value={linkAvatar} onChangeText={setLinkAvatar} placeholder="Nhập link ảnh của bạn" />

               <View style={{alignItems:'center'}}>
               <TouchableOpacity style={styles.buttonStyle} onPress={handChangeInfor}>
                    <Text style={{color:'white'}}>Thay đổi dữ liệu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={onClickChangeFooterColor}>
                    <Text style={{color:'white'}}>Thay đổi màu footer</Text>
                </TouchableOpacity>
               </View>
            </View>
        </View>
       </KeyboardAvoidingView>
       
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        borderRadius: 15,
        marginTop: 10,
        elevation: 5
    },
    styleText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    textInputStyle:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20
    },
    buttonStyle:{
        width: 200,
        height: 50,
        backgroundColor:'#FF6600',
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
    }
});