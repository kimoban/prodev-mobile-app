import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text style={{ color: "#000", fontSize: 32, fontWeight: "400", marginBottom: 24 }}>Profile</Text>
        <View style={{ backgroundColor: "#34967C", height: 90, marginBottom: 40, flexDirection: "row", alignItems: "center", borderRadius: 8, justifyContent: "space-between", paddingHorizontal: 28 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Image source={require("@/assets/images/user-image.png")} />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 20, color: "#fff" }}>
                Cole Baidoo
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}>@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        <View style={{ height: 350, gap: 12, backgroundColor: "#fff", borderRadius: 8, padding: 16, marginBottom: 16 }}>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>My Account</Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>
                  Saved Beneficiary
                </Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>
                  Face ID / Touch ID
                </Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>
                  Two-Factor Authentication
                </Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <MaterialIcons name="logout" size={24} color="#0601B4" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>Log out</Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>

        <Text style={{ color: "#000", fontSize: 20, fontWeight: "400", marginBottom: 24 }}>More</Text>

        <View style={{ height: 139, gap: 12, backgroundColor: "#fff", borderRadius: 8, padding: 16, marginBottom: 16 }}>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>My Account</Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <View style={{ width: 48, height: 48, backgroundColor: "rgba(6,1,180,0.1)", alignItems: "center", justifyContent: "center", borderRadius: 9999 }}>
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 8 }}>
                  Saved Beneficiary
                </Text>
                <Text style={{ fontWeight: "300", color: "#374151" }}>
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;