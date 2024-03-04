import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323247",
    height: 56,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 15
  },
  participantName: {
    fontSize: 20,
    marginLeft: 20,
    color: "#fff",
  },

  removeButton: {
    height: 56,
    width: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e23c44",
  },
  removeButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
