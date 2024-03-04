import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./participant-styles";

export function Participant(props: { removeFunction: () => void; name: string}) {
  function handleRemoveParticipant() {
    props.removeFunction();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{props.name}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={handleRemoveParticipant}
      >
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
