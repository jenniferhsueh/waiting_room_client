import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    margin: 0,
    backgroundColor: "#478bb5"
  },
  text: {
    color: "white"
  },
  subtitle: {
    color: "lightgrey"
  },
  formText: {
    color: "white",
    fontSize: 20,
    padding: 20
  },
  button: {
    width: "60%",
    alignSelf: "center",
    margin: 15,
    backgroundColor: "#478bb5"
  },
  regContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    left: 0,
    right:0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
})