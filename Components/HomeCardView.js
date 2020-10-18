import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph, Text} from 'react-native-paper';
import {StyleSheet,View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../Constants/Colors";

const HomeCardView = (props) => {

    const [isClicked,setIsClicked]=React.useState('black');

    const LeftContent = () => <Avatar.Image size={50} source={require('../assets/Photos/PhotoProfileExample.webp')} />

    const redirection =()=>props.navigation.navigate('HomeDetails', {name: "Détailles de la maison",idHome:props.idHome,autorisation:true})

    return(
        <View>
            <Card style={styles.cardStyle} onPress={redirection}>
                <Card.Title title={props.userName} subtitle={props.userDescription} left={LeftContent} />
                <Card.Content>
                    <Title>{props.homeTitle}</Title>
                    <Paragraph style={{marginBottom: 20}}>prix: {props.homePrice}€ - chambre: {props.homeRoom}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: props.homeImage }} />
                <Card.Actions>
                    <View style={styles.heartIconsContainer}>
                        <View style={styles.heartContainer}>
                            <AntDesign name="heart" onPress={()=>setIsClicked(state=>state==='black'?Colors.purpleStyle:'black')}
                                       size={30} color={isClicked} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.iconContainer}>
                            <Text>{props.homeadress}</Text>
                            <Text>{props.totalArea} M2 </Text>
                            <Text>{props.fixedChargesCost}</Text>
                        </View>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle:{
        marginBottom:30,
        elevation:5,
        marginHorizontal:5
    },
    iconContainer:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row"
    },
    iconStyle:{
        textAlign: 'center',
        flex:1
    },
    heartContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    heartIconsContainer:{
        flex:1,
        justifyContent:'center',
        flexDirection:"row"
    }
})

export default HomeCardView;