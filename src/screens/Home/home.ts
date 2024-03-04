import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 30,
  },
  titleStyle: {
    color: "#fff",
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
  },
  subTitleStyle: {
    fontSize: 15,
    color: "grey",
  },
  input: {
    flex: 1,
    borderColor: "white",
    color: "#FFF",
    backgroundColor: "#1f1e25",

    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#23bf4b",
    width: 56,
    height: 56,
    borderRadius: 5,
  },

  form: {
    marginTop: 20,
    width: "100%",
    gap: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  emptyException: {
    color: "#6b6b6b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 30,
  },
});
