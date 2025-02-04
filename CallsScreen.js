import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const recentCalls = [
  { id: "1", name: "Preethi🙈", time: "Today, 10:07 AM", image: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid", type: "video" },
  { id: "2", name: "Akka😘❤️", time: "Yesterday, 9:23 PM", image: "https://img.freepik.com/free-vector/two-friends-garden-night-wearing-pajamas_1308-135415.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid", type: "voice" },
  { id: "3", name: "Chanu🙊", time: "January 31, 8:47 PM", image: "https://img.freepik.com/free-photo/3d-portrait-little-girl-holding-flower-with-copy-space_23-2151061839.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid", type: "video" },
  { id: "4", name: "Akka😘❤️", time: "January 30, 8:06 PM", image: "https://img.freepik.com/free-vector/two-friends-garden-night-wearing-pajamas_1308-135415.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid", type: "voice" },
  { id: "5", name: "D^2 J^3🍫🍫", time: "January 29, 8:35 PM", image: "https://img.freepik.com/premium-photo/young-women-as-social-media-influencers-vector-illustration-concept_1029476-436613.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid", type: "video" },
];
const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Calls</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="qr-code-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Favorites</Text>
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart" size={30} color="green" />
        <Text style={styles.favoriteText}>Add favorite</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Recent</Text>
      <FlatList
        data={recentCalls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.callItem}>
            <Image source={{ uri: item.image }} style={styles.callImage} />
            <View style={styles.callInfo}>
              <Text style={styles.callName}>{item.name}</Text>
              <Text style={styles.callTime}>{item.time}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name={item.type === "video" ? "videocam-outline" : "call-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.callButton}>
        <Ionicons name="call" size={30} color="white" />
      </TouchableOpacity>
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
  heading: { fontSize: 22, fontWeight: "bold" ,color:'#0EF700'},
  headerIcons: { flexDirection: "row", gap: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginTop: 10 },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  favoriteText: { fontSize: 16, marginLeft: 10 },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  callImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  callInfo: { flex: 1 },
  callName: { fontSize: 16, fontWeight: "bold" },
  callTime: { fontSize: 14, color: "gray" },
  callButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: { alignItems: "center" },
  navItemActive: { alignItems: "center", borderBottomWidth: 2, borderBottomColor: "green" },
  activeText: { color: "green", fontWeight: "bold" },
});
export default CallsScreen;
