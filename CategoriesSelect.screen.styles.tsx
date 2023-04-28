import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    categoriesSelectContainer: {
        height: "100%",
        paddingHorizontal: 5,
        paddingVertical: 30,
    },
    categoriesSelectDescContainer: {
        paddingBottom: 34,
    },
    categoriesSelectDescSubContainerOne: {
        justifyContent: "center",
        alignItems: "center",
    },
    categoriesSelectDesc: {
        fontSize: 28,
        color: "#11A6DF",
        lineHeight: 37,
        textAlign: "center",
    },
    categoriesSelectMinText: {
        fontSize: 14,
        color: "#11A6DF",
        textAlign: "center",
    },
    flatListContainerStyle: {
        height: "70%"
        
    },
    continueBtnContainer: {
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    continueBtn: {
        height: 55,
        width: "100%",
        backgroundColor: "#11A6DF",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    continueBtnText: {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    }
})