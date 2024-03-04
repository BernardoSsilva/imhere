import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./home";

import React, { useState } from "react";
import { Participant } from "./components/participant/Participant";

export function Home() {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  async function handleRegisterNewEventParticipant(newParticipantName: string) {
    if (newParticipantName.length <= 0) {
      Alert.alert(
        "Erro",
        "O nome do participante não pode estar vazio. Digite algo"
      );
    } else {
      setParticipants((prevState) => [...prevState, newParticipantName]);
      setParticipantName("");
    }
  }

  async function handleRemoveParticipant(participantKey: number) {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este participante?",
      [
        {
          text: "Sim",
          onPress: () => {
            const deletedParticipant = participants[participantKey];
            const participantsWithoutDeletedOne = participants.filter(
              (participant) => participant !== deletedParticipant
            );
            setParticipants(participantsWithoutDeletedOne);
          },
        },
        { text: "Não", onPress: () => alert("Exclusão cancelada") },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Nome do evento</Text>
      <Text style={styles.subTitleStyle}></Text>

      <View style={styles.form}>
        <TextInput
          value={participantName}
          placeholder="Digite aqui o nome"
          placeholderTextColor="#6b6b6b"
          onChangeText={(text) => setParticipantName(text)}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRegisterNewEventParticipant(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.length > 0 ? (
          participants.map(
            (participant, key = participant.indexOf(participant)) => (
              <Participant
                key={key}
                name={participant}
                removeFunction={() => handleRemoveParticipant(key)}
              />
            )
          )
        ) : (
          <Text style={styles.emptyException}>
            {" "}
            Nenhum participante encontrado, adicione novos participantes a sua
            lista
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
