
import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react"

interface FooterType {
    timeUpdate: string,
    backgroundColor: string
}

export const Footer:  React.FC<FooterType> = memo(props => {
    const {timeUpdate, backgroundColor} = props;
    return(
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Thời gian bạn cập nhật thông tin: {timeUpdate}
            </Text>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: 'lightblue',
        borderRadius: 15,
        elevation: 5,
        marginTop: 10,
        alignItems:'center',
        justifyContent:'center',
    
    }
})