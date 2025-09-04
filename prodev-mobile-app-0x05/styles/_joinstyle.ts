import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  iconsection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 8,
  },
  titleTextGroup: {
    alignItems: "center",
    marginBottom: 24,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 24,
    gap: 12,
  },
  formLabel: {
    color: "#888",
    marginBottom: 4,
  },
  formControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  formPasswordControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  passwordControl: {
    flex: 1,
  },
  primaryButton: {
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
  secondaryButtonGroup: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 16,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  secondaryButtonText: {
    marginLeft: 8,
    color: "#222",
    fontWeight: "bold",
  },
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  signupTitleText: {
    color: "#888",
    fontSize: 16,
  },
  signupSubTitleText: {
    color: "#34967C",
    fontSize: 16,
    fontWeight: "bold",
  },
});
