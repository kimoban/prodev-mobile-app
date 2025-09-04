import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
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
    color: "#888",
    marginBottom: 4,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  forgotPasswordText: {
    color: "#34967C",
    textAlign: "right",
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#34967C",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
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
    color: "#888",
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
    marginBottom: 8,
  },
  socialMediaButtonText: {
    marginLeft: 8,
    color: "#222",
    fontWeight: "bold",
  },
});
