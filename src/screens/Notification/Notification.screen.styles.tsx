import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 36,
    paddingHorizontal: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.color.neutral_black,
  },
  notificationCountContainer: {
    width: 15,
    height: 15,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  notificationCountText: {
    fontSize: 10,
    fontWeight: '400',
    color: theme.color.neutral_white,
  },
  markContainer: {
    marginTop : 10,
    paddingTop : 13,
    paddingBottom: 8,
    paddingHorizontal: 20,
    backgroundColor : theme.color.neutral_white
  },
  markText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.color.neutral_black,
  },
  profileImageContainer: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  notificationList : {
    // width : "100%",
    backgroundColor: "white", 
    paddingVertical : 10,
    // paddingHorizontal : 5

  },


});
