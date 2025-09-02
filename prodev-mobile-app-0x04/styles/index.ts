import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  largeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  smallText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 24,
  },
  placeholderText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  forgotPasswordText: {
    color: "#3498db",
    textAlign: "right",
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#eee",
  },
  dividerText: {
    marginHorizontal: 8,
    color: "#aaa",
    fontWeight: "bold",
  },
  socialMediaButtonGroup: {
    flexDirection: "column",
    gap: 10,
  },
  socialMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialMediaButtonText: {
    marginLeft: 10,
    color: "#222",
    fontWeight: "bold",
  },
});

export { styles };
