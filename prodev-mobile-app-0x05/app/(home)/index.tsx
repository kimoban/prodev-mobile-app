import React from "react";
// Update the import path below to the correct relative path if "@/components/PropertyListing" does not exist.
// For example, if PropertyListing.tsx is in app/components/PropertyListing.tsx, use:
// Update the import path below to the correct relative path if "@/components/PropertyListing" does not exist.
// For example, if PropertyListing.tsx is in app/components/PropertyListing.tsx, use:
import PropertyListing from "@/components/PropertyListing";
// Update the path below if your _homestyle file is in a different location
// Update the path below if your _homestyle file is in a different location
// import { styles } from "../styles/_homestyle";
import { styles } from "./styles/_homestyle"; // <-- Update this path as needed to the correct location of your _homestyle file
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
// Update the path below to the correct relative path where your data file is located.
// For example, if data.ts is in app/constants/data.ts, use:
import { FILTERS, SAMPLE_DATA } from "../constants/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter: string, index: number) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;