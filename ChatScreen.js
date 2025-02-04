import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';

// Sample chat data (you can replace this with dynamic data)
const chats = [
  {
    id: '1',
    name: 'siri😍(ME)',
    message: 'Ok',
    time: '3:17 pm',
    unread: false,
    pinned: false,
    image: 'https://img.freepik.com/free-vector/flat-radha-krishna-illustration_52683-158363.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '2',
    name: 'Amma ❤️❤️',
    message: 'What you want for dinner?🤔',
    time: '12:06 pm',
    unread: true,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151306185.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '3',
    name: 'Daddy 😍❤️',
    message: 'https://sandhyamedapati.web...',
    time: '11:35 am',
    unread: false,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/3d-rendering-kid-with-parent-beach_23-2151054535.jpg?uid=R16769',
  },
  {
    id: '4',
    name: 'Akka😘❤️',
    message: 'Select me a dress!',
    time: '12:52 pm',
    unread: true,
    pinned: false,
    image: 'https://img.freepik.com/free-vector/two-friends-garden-night-wearing-pajamas_1308-135415.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '5',
    name: 'Preethi🙈',
    message: 'What about Golden day Sandhya',
    time: '12:52 pm',
    unread: false,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '6',
    name: 'Sirisha🙉',
    message: 'Sandhya',
    time: '11:00 am',
    unread: true,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/3d-portrait-little-girl-holding-flower-with-copy-space_23-2151061839.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '7',
    name: 'Chanu🙊',
    message: 'Ekkada unnaru',
    time: '09:00 am',
    unread: false,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/portrait-beautiful-hipster-girl-glasses-cap_1142-39044.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
  {
    id: '8',
    name: '🙊🙉🙈🐵',
    message: 'Preethi:ok',
    time: '09:00 am',
    unread: false,
    pinned: false,
    image: 'https://img.freepik.com/free-photo/cartoon-style-hugging-day-celebration_23-2151033272.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
  },
];

// Chat Item Component
const ChatItem = ({ chat }) => (
  <TouchableOpacity style={styles.chatItem}>
    <Image source={{ uri: chat.image }} style={styles.avatar} />
    <View style={styles.chatDetails}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatName}>{chat.name}</Text>
        <Text style={styles.chatTime}>{chat.time}</Text>
      </View>
      <Text style={styles.chatMessage}>{chat.message}</Text>
    </View>
    {chat.unread && <View style={styles.unreadBadge}><Text style={styles.unreadText}>1</Text></View>}
    {chat.pinned && <Ionicons name="pin" size={18} color="gray" style={styles.pinIcon} />}
  </TouchableOpacity>
);
const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="camera-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem chat={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white', marginTop: 30 },
  topBar: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 22, color: '#0EF700', fontWeight: 'bold' },
  icons: { flexDirection: 'row' },
  icon: { marginRight: 20 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    margin: 10,
    padding: 8,
    borderRadius: 20,
  },
  searchIcon: { marginHorizontal: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  chatDetails: { flex: 1 },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  chatName: { fontSize: 16, fontWeight: 'bold' },
  chatTime: { fontSize: 12, color: 'gray' },
  chatMessage: { fontSize: 14, color: 'gray' },
  unreadBadge: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  pinIcon: { marginLeft: 10 },
});
export default ChatScreen;
