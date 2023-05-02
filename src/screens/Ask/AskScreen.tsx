import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header/Header";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./AskScreen.screen.styles";


export default function AskScreen(){

    return (
        <View>
            <Header/>
            <View style={styles.AskMainContainer}>
                <View style={styles.AskSubContainerOne}>
                    <View>
                        <Image source={require("../../assets/icons/backarrow.png")} />
                    </View>
                    <View style={styles.tipsContainer}>
                        <Text>Tips</Text>
                        <View style={styles.tipsSubContainer}>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Start your question with where, who etc</Text>
                            </View>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Keep questions short and straight to the point</Text>
                            </View>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Check Spelling</Text>
                            </View>
                        </View>  
                    </View>
                </View>
                

                {/* Question area for the ask */}
                <View style={styles.AskTextContainer}>
                    <TextInput placeholder="Enter your question here" multiline style={styles.AskText}/>
                </View>

                {/* Category dropdown */}
                <View style={styles.dropdownContainer}>
                    <Text>Category</Text>
                </View>

                {/* Location dropdown */}
                <View style={styles.dropdownContainer}>
                    <Text>Location</Text>
                </View>

                {/* How long ask will last dropdown */}
                <View>
                    <View style={styles.dropdownContainer}>
                        <Text>How long do you want this ask to last</Text>
                    </View>
                    <View style={styles.noticeContainer}>
                        <Text style={styles.noticeText}>All ask have a maximum of 7days to expire on this platform</Text>
                    </View>
                    
                </View>

                {/* Upload picture */}
                <View style={[styles.dropdownContainer,styles.uploadContainer]}>
                    <View>
                        <Image source={require("../../assets/icons/upload.png")} />
                    </View>
                    <Text>Upload picture</Text>
                </View>
                
                <View>
                    <View style={styles.askBtnContainer}>
                        <TouchableOpacity style = {styles.askBtn}>
                            <Text style={styles.askBtnText}>Ask</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}