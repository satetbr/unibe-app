import React, { useState, useContext } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { DadosContext } from "../../contexts/dados";
import { set } from 'firebase/database';


  const data = [
    { label: 'AFA', value: 'AFA' },
    { label: 'CBMERJ', value: 'CBMERJ' },
    { label: 'CN', value: 'CN' },
    { label: 'EAGS', value: 'EAGS' },
    { label: 'EAM', value: 'EAM' },
    { label: 'EEAR', value: 'EEAR' },
    { label: 'EFOMM', value: 'EFOMM' },
    { label: 'EN', value: 'EN' },
    { label: 'EPCAR', value: 'EPCAR' },
    { label: 'ESA', value: 'ESA' },
    { label: 'EsPCEx', value: 'EsPCEx' },
    { label: 'FN', value: 'FN' },
    { label: 'ITA', value: 'ITA' },
  ];

  const DropdownComponent = () => {

    const { dados, setDrop } = useContext(DadosContext);
    const [goal, setGoal] = useState(dados.goal);
    
    return (
      <Dropdown
        dropdownPosition='top'
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecione a sua prova objetivo"
        searchPlaceholder="Busque..."
        value={goal}
        onChange={item => {
          setGoal(item.value);
          setDrop(item.value);
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