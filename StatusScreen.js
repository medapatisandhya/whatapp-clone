import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const statuses = [
  { id: "1", name: "Preethi", image: {uri:"https://img.freepik.com/free-photo/cartoonish-thaipusam-celebration_23-2151101780.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid"}},
  { id: "2", name: "chanu", image: {uri:"https://img.freepik.com/free-photo/cartoonish-thaipusam-celebration_23-2151101768.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid"}},
  { id: "3", name: "sirisha", image: {uri:"https://img.freepik.com/free-vector/saraswati-goddess-playing-instrument_23-2148805191.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid"}},
];
const channels = [
  { id: "1", name: "BTech Offcampus Updates", message: "Company: Flipkart Batch Eligible..." },
  { id: "2", name: "Krishan Kumar - Jobs & Internships", message: "If anyone had cracked Internship..." },
  { id: "3", name: "EzLearn Updates", message: "We are still hiring for Founders Off..." },
];
const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Updates</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Status</Text>
      <FlatList
        horizontal
        data={[{ id: "0", name: "My Profile", image: {uri:"https://img.freepik.com/free-vector/flat-radha-krishna-illustration_52683-158363.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid"} }, ...statuses]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.statusItem}>
            <Image source={item.image} style={styles.statusImage} />
            <Text style={styles.statusName}>{item.name}</Text>
          </View>
        )}
      />
      <Text style={styles.sectionTitle}>Channels</Text>
      <FlatList
        data={channels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.channelItem}>
            <Image source={require("./assets/thub2.jpg")} style={styles.channelImage} />
            <View>
              <Text style={styles.channelName}>{item.name}</Text>
              <Text style={styles.channelMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    marginTop:20
  },
  heading: { fontSize: 22, fontWeight: "bold", color:'#0EF700' },
  headerIcons: { flexDirection: "row", gap: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginTop: 10 },
  statusItem: { alignItems: "center", marginHorizontal: 10 },
  statusImage: { width: 100, height: 150},
  statusName: { fontSize: 14, marginTop: 5 },
  channelItem: { flexDirection: "row", padding: 10, alignItems: "center", borderBottomWidth: 0.5, borderBottomColor: "#ccc",marginBottom:20 },
  channelImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  channelName: { fontSize: 16, fontWeight: "bold" },
  channelMessage: { fontSize: 14, color: "gray" },
  imageContainer: { flexDirection: "row", gap: 5 },
channelImage: { width: 40, height: 40, borderRadius: 20, marginRight: 5 },
  floatingButtons: { position: "absolute", bottom: 80, right: 20, alignItems: "center" },
  editButton: {
    backgroundColor: "#E0E0E0",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cameraButton: {
    backgroundColor: "#0EF700",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ccc" },
  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center", borderBottomWidth: 2, borderBottomColor: "green" },
  activeText: { color: "green", fontWeight: "bold" },
});
export default StatusScreen;
