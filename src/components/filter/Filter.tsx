import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {styles} from './Filter.component.styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { categoryTempData, locationData, timeData } from '../../data/standardData';

export default function Filter(props : {
  cancel : any,
  filter : (category : any, location: any, dateLimit: any) => void,
  categoryData : never[]
}) {
  // const [selectedCategory, setSelectedCategory] = React.useState('');
  // const [selectedLocation, setSelectedLocation] = React.useState('');
  // const [selectedTime, setSelectedTime] = React.useState('');

  const [openCategory, setOpenCategory] = React.useState(false);
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(false);
  const [categoryValue, setCategoryValue] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);

  const [categoryItems, setCategoryItems] = React.useState(props.categoryData);
  const [locationItems, setLocationItems] = React.useState(locationData);
  const [timeItems, setTimeItems] = React.useState(timeData);

  const applyCategoryToFilter = () => {
    props.filter(categoryValue, locationValue, timeValue)
  }

  console.log("filter:", categoryValue);
  console.log("filter:", locationValue);
  console.log("filter:", timeValue);

  return (
    <View style={styles.filterContainer}>
      <View>
        <View style={styles.filterSubContainerOne}>
          <DropDownPicker
            schema={{label: 'name', value: 'name'}}
            open={openCategory}
            value={categoryValue}
            items={categoryItems}
            setOpen={setOpenCategory}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
            listMode="MODAL"
            searchable
            placeholder="Category"
            searchPlaceholder="Search for your category. . ."
            style={styles.dropdownContainer}
            ArrowDownIconComponent={() => (
              <Image source={require('../../assets/icons/downarrow.png')} />
            )}
            placeholderStyle={styles.inputStyles}
          />

          <DropDownPicker
            schema={{label: 'value', value: 'key'}}
            open={openLocation}
            value={locationValue}
            items={locationItems}
            setOpen={setOpenLocation}
            setValue={setLocationValue}
            setItems={setLocationItems}
            listMode="MODAL"
            searchable
            searchPlaceholder="Search for your Location. . ."
            placeholder="Location"
            style={styles.dropdownContainer}
            ArrowDownIconComponent={() => (
              <Image source={require('../../assets/icons/downarrow.png')} />
            )}
            placeholderStyle={styles.inputStyles}
          />

          <DropDownPicker
            schema={{label: 'value', value: 'key'}}
            open={openTime}
            value={timeValue}
            items={timeItems}
            setOpen={setOpenTime}
            setValue={setTimeValue}
            setItems={setTimeItems}
            listMode="MODAL"
            placeholder="Latest date of need"
            style={styles.dropdownContainer}
            ArrowDownIconComponent={() => (
              <Image source={require('../../assets/icons/downarrow.png')} />
            )}
            placeholderStyle={styles.inputStyles}
          />
        </View>

        <View style={styles.btnMainContainer}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={props.cancel}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.filterBtn} onPress={applyCategoryToFilter}>
              <Text style={styles.filterBtnText}>Apply filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

