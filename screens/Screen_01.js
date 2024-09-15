import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Screen_01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* First View with "Order your favorite!" */}
      <View style={styles.style1}>
        <Text style={{ color: "green", fontSize: 30, fontWeight: "bold" }}>
          Order your favorite!
        </Text>
      </View>

      {/* Images Section */}
      <View style={styles.style2}>
        <Image
          source={require("../assets/Data/Image 96.png")}
          style={{ width: 150, height: 150, marginLeft: 215 }}
        />
        <Image
          source={require("../assets/Data/Image 95.png")}
          style={{ width: 150, height: 150, marginLeft: 20, marginTop: -25 }}
        />
        <Image
          source={require("../assets/Data/Image 97.png")}
          style={{
            width: 150,
            height: 150,
            marginLeft: 0,
            marginTop: 30,
            marginLeft: 200,
          }}
        />
      </View>

      {/* TouchableOpacity Section */}
      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen_02")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  style1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  style2: {
    flex: 3,
    backgroundColor: "#fff",
  },
  style3: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
