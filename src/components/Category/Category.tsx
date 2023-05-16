import {Pressable, Text, View} from 'react-native';
import {styles} from './Category.component.styles';
import {CategoryType} from '../../../dataType';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../theme/theme';
import React from 'react';

export default function Category(props: {
  category: CategoryType;
  onPress: any;
}) {
  const [isSelected, SetIsSelected] = React.useState<boolean>(false);

  return (
    <Pressable
      style={styles.categoryContainer}
      onPress={() => {
        props.onPress();
        SetIsSelected(prevState => !prevState)
      }}>
      {isSelected ? (
        <View style={styles.checkStyles}>
          <FontIcon name="check" size={12} color={theme.color.neutral_white} />
        </View>
      ) : (
        <View></View>
      )}
      <Text style={styles.categoryText}>{props.category.name}</Text>
    </Pressable>
  );
}
