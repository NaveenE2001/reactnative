import { View, Text } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";

const CusCheckBox = ({ size, title, subtitle, containerStyle, required }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheck = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };
  
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginBottom: 10 }}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      {subtitle &&
        subtitle.map((item, index) => (
          <CheckBox
            key={index}
            title={item}
            checked={checkedItems.includes(item)}
            onPress={() => handleCheck(item)}
            size={size}
            containerStyle={containerStyle}
          />
        ))}
    </View>
  );
};

export default CusCheckBox;
