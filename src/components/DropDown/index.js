import React, { useState } from 'react';
  import { StyleSheet, View, Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'AFA', value: '1' },
    { label: 'CBMERJ', value: '2' },
    { label: 'CN', value: '3' },
    { label: 'EAGS', value: '4' },
    { label: 'EAM', value: '5' },
    { label: 'EEAR', value: '6' },
    { label: 'EFOMM', value: '7' },
    { label: 'EN', value: '8' },
    { label: 'EPCAR', value: '9' },
    { label: 'ESA', value: '10' },
    { label: 'EsPCEx', value: '11' },
    { label: 'FN', value: '12' },
    { label: 'ITA', value: '13' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={350}
        labelField="label"
        valueField="value"
        placeholder="Selecione a sua prova objetivo"
        searchPlaceholder="Busque..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
        paddingLeft: 20,
      height: 43,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });