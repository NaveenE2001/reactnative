import React from "react";
import { View, Text } from "react-native";
import { CheckBox } from "@rneui/themed";

const RadioButton = ({
  title,
  style,
  required,
  subtitle,
  containerStyle,
  uncheckedIcon,
  checkedIcon,
  ...props
}) => {
  const [selectedIndex, setIndex] = React.useState(0);

  return (
    <View style={style}>
      <Text className="m-2 text-black-900">
        {title}
        {required && <Text className="text-red-800"> *</Text>}
      </Text>
      <View style={{ flexDirection: "row" }}>
        {subtitle &&
          subtitle.map((sub, index) => (
            <CheckBox
              key={index} // Add key prop to avoid warnings
              checked={selectedIndex === index}
              onPress={() => setIndex(index)}
              checkedIcon={checkedIcon}
              uncheckedIcon={uncheckedIcon}
              title={sub}
              containerStyle={containerStyle}
              {...props} // Pass other props to CheckBox component
            />
            
          ))}
          
      </View>
      
    </View>
  );
};

export default RadioButton;
