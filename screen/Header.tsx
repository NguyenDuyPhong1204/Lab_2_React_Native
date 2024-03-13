import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native"
import { UserType } from "./Main"
import React, { memo } from "react"

type HeaderType = {
    user: UserType
}

export const Header: React.FC<HeaderType> = memo(props => {
    const { user } = props;
    return (
      
         <View>
            <View style={styles.headerStyle}>
                <Image
                    style={styles.styleAvatar}
                    source={{ uri: user.avatar }}
                >
                </Image>
                <View style={{marginLeft: 10}}>
                    <Text>Welcome</Text>
                    <Text style={styles.textStyle}>{user.name}</Text>
                </View>
            </View>
        </View>
      
    )
});

const styles = StyleSheet.create({
    styleAvatar: {
        width: 50,
        height: 50,
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        
    },
    headerStyle: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 15,
        elevation: 5
    }
})