import { View } from "react-native"
import { Body } from "./Body"
import { Footer } from "./Footer"
import { useCallback, useEffect, useState } from "react"
import { Header } from "./Header"

export type UserType ={
    name: string,
    avatar: string
}

const color = ["white", 'black', 'red', 'lightblue', 'orange', 'gray'];

export default function Main(){

    const [user, setUser] = useState<UserType>({
        name:'Nguyễn Duy Phong',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
    });
    
    const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');

    const [footerColor, setFooterColor] = useState(color[0]);

    //cập nhật thông tin cho tài khoản
    const handUpdateInfor = useCallback((_user: UserType) =>{
        setUser(_user);
    },[]);

    //ramdom màu cho background footer
    const handRamdomColor = useCallback(()=>{
        const numberRan = Math.floor(Math.random() * color.length);
        setFooterColor(color[numberRan]);
    },[]);

    //mỗi lần thông tin user thay đổi, sẽ cậP nhật lại thời gian sửa đổi
    useEffect(() =>{
        const currentdate = new Date();
        const dateTime = 
        currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
        setLastTimeUpdate(dateTime);
    },[user]);
    return(
        <View style={{flex: 1, padding: 10}}>
           <Header user={user}/>
            <Body onClickChangeFooterColor={handRamdomColor} onUpdate={handUpdateInfor}/>
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>                                                                                                 
        </View>
    )
}