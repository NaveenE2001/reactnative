import React from "react";
import { View, Text, Button } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FilePicker = ({ title, required }) => {
  const [file, setFile] = React.useState(null);

  const handleFilePick = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    if (!result.canceled) {
      setFile(result);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginBottom: 10 }}>
        {title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <Button title="Select File" onPress={handleFilePick} />
      {file && (
        <View style={{ marginTop: 10 }}>
          {file.assets && file.assets.length > 0 && (
            <Text>{`Selected File: ${file.assets[0].name}`}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default FilePicker;
