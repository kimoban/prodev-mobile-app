import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchGroup: {
    marginBottom: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 8,
  },
  searchFormText: {
    fontSize: 16,
    color: "#222",
    marginBottom: 4,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 8,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 12,
    width: 72,
  },
  listingContainer: {
    marginTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
