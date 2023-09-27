import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'
import colors from '../colors';
const profileImageUrl = "https://yt3.ggpht.com/yti/AHyvSCDIOha5Q7CrO_QNokSjWnO7kZ0-tSBGxCz--qcT3w=s88-c-k-c0x00ffffff-no-rj-mo"

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
            ),
            headerRight: () => (
                <Image source={{ uri: profileImageUrl }} style={{ width: 40, height: 40, marginRight: 15 }} />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.chatButton}>
                <Entypo name="chat" size={24} color={colors.lightGray}> </Entypo>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#fff"
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50
    }
})