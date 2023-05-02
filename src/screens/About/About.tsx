import { Image, Text, View, ScrollView } from "react-native";
import { styles } from "./About.screen.styles";


export default function About(){


    return(
        <ScrollView style={styles.aboutMainContainer}>
            <View>
                <View>
                    <Image source={require("../../assets/images/cloud.png")} />
                </View>

                <View style={styles.textContainerOne}>
                    <Text style={styles.aboutText}>
                        In today's world, people have various activities they perform and at one point or the other, 
                        they need something or a service that a neighbor has. But then, how do they know that the neighbor 
                        has that service?
                    </Text>
                    <Text style={styles.aboutText}>
                        WhoGet&apos;s mission is to help people with these need to get people respond to their various asks. 
                        All this knowledge only get accessible if you know the right people. WhoGet wants to connect the people with the ask to the people with the responses. 
                       
                    </Text>
                    <Text style = {styles.aboutText}>
                        To make searching for services easier and fun right at the comfort of your home
                    </Text>
                </View>

                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/images/logo_blue.png")} />
                </View>

                <View>
                    <Text style={styles.aboutText}>
                        The heart of WhoGet is Asks. Asks that people have serious needs for. Ask that they cannot function properly without, Asks that could save them alot of trouble if they got responses to. 
                        WhoGet is a place where you can place an ask and get responses from people who have just the right answers for you. Its a collection of people of all works of lie
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}