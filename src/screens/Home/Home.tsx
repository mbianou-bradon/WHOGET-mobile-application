import React from "react";
import { Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Home.screen.styles";
import Ask from "../../components/Ask/Ask";
import Feather from "react-native-vector-icons/Feather"
import { theme } from "../../theme/theme";
import Filter from "../../components/filter/Filter";
import Ionic from "react-native-vector-icons/Ionicons"

export default function Home(){

    const [hasProfile, setHasProfile] = React.useState<boolean>(true);
    const [filterModalIsOpen, setFilterModalIsOpen] = React.useState(false);

    const handleFilterModal = () => {
        if(filterModalIsOpen)
            setFilterModalIsOpen(false)
        else 
            setFilterModalIsOpen(true)
    }
    return(
        <View>
            <Header/>
            <View style={styles.homeContainer}>

                <View style={styles.homeSubContainerOne}>
                    {
                        hasProfile? <Ionic name='person-circle-outline' size={45} color={styles.IconColor.color}/> :
                    
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                    </View>
                    }
                    <View style={styles.searchContainer}>
                        <View style={styles.searchIconContainer}>
                            <Image source={require("../../assets/icons/search.png")} style={styles.searchIcon}/>
                        </View>
                        <TextInput placeholder="Search" autoComplete="name" autoCorrect style={styles.searchText}/>
                    </View>

                    <Pressable android_ripple={{color:theme.color.primary_blue_light}} onPress={handleFilterModal}>
                        <Feather name="filter" size={35} />
                    </Pressable>

                    {filterModalIsOpen && 
                        <Modal
                        animationType="fade"
                        visible={filterModalIsOpen}
                        transparent
                        onRequestClose={() => setFilterModalIsOpen(false)}
                        style={{backgroundColor:theme.color.neutral_black, opacity:0.2}}
                        >
                            <View>
                                <Filter />

                                <Pressable onPress={handleFilterModal} style={{height:"100%"}}></Pressable>
                            </View>
                        </Modal>
                    }
                </View>

                <View style={styles.askQuestionContainer}>
                    <View style={styles.askQuestionSubContainer}>
                        <Text style={styles.askQuestionSubContainerText}>Ask your question</Text>
                    </View>
                    <View style={styles.askQuestionSubContainerTwo}>
                        <Text style={styles.askQuestionSubContainerTwoText}>Ask</Text>
                    </View>
                </View>

                <View style={styles.askContainer}>
                    <ScrollView style={{paddingBottom: 100}}>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                        <Ask/>
                    </ScrollView>
                    
                </View>
            </View>
        </View>
    )
}