import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Home.screen.styles";
import Ask from "../../components/Ask/Ask";
import ConfirmingUsername from "../Registration/ConfirmationUsername/ConfirmingUsername";


export default function Home(){

    const [hasProfile, setHasProfile] = React.useState<boolean>(false);
    return(
        <View>
            <ConfirmingUsername/>
        </View>




        // <View>
        //     <Header/>
        //     <View style={styles.homeContainer}>

        //         <View style={styles.homeSubContainerOne}>
        //             <View style={styles.profileImageContainer}>
        //                 <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
        //             </View>

        //             <View style={styles.searchContainer}>
        //                 <View style={styles.searchIconContainer}>
        //                     <Image source={require("../../assets/icons/search.png")} style={styles.searchIcon}/>
        //                 </View>
        //                 <TextInput placeholder="Search" autoComplete="name" autoCorrect style={styles.searchText}/>
        //             </View>

        //             <View>
        //                 <Image source={require("../../assets/icons/filter.png")}/>
        //             </View>
        //         </View>

        //         <View style={styles.askQuestionContainer}>
        //             <View style={styles.askQuestionSubContainer}>
        //                 <Text style={styles.askQuestionSubContainerText}>Ask your question</Text>
        //             </View>
        //             <View style={styles.askQuestionSubContainerTwo}>
        //                 <Text style={styles.askQuestionSubContainerTwoText}>Ask</Text>
        //             </View>
        //         </View>

        //         <View style={styles.askContainer}>
        //             <ScrollView>
        //                 <Ask/>
        //                 <Ask/>
        //                 <Ask/>
        //                 <Ask/>
        //                 <Ask/>
        //                 <Ask/>
        //                 <Ask/>
        //             </ScrollView>
                    
        //         </View>
        //     </View>
        // </View>
    )
}