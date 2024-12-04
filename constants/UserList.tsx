import React, { useState } from "react";
import { Text, View } from "react-native";

export const UserList = () => {
  const [name, setName] = useState("田中");
  return (
    <View>
      <Text>UserList</Text>
      <Text>{name}</Text>
    </View>
  );
};
