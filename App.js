import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style.js";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "./assets/logo1.png";
import film from "./assets/film.jpg";

export default function App() {
  return (
    <SafeAreaView style={styles.areaView}>
      <ScrollView>
        <View>
          <View style={styles.containerLogo}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            ></Image>
          </View>
          <View style={styles.containerMovie}>
            <Text style={styles.title}>Interstellar</Text>
            <Text>2014 PG-13 2h49min Adventure, Drama, Sci-Fic</Text>
            <View style={styles.containerDetail}>
              <Image
                source={film}
                style={styles.filmPic}
                resizeMode="contain"
              ></Image>
              <View style={styles.text}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum molestias eum omnis ea ullam, sint ad ipsa dolor
                  incidunt eos! Maxime
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ textAlign: "center" }}>
                    + ADD TO WHATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerRate}>
              <View style={styles.rate}>
                <Ionicons name="star-sharp" size={45} color="yellow" />
                <Text style={styles.rateTxt}>8.6/10</Text>
              </View>
              <View style={styles.rate}>
                <Ionicons name="star-outline" size={45} color="black" />
                <Text style={styles.rateTxt}>RATE THIS</Text>
              </View>
              <View style={styles.rate}>
                <MaterialIcons name="score" size={45} color="green" />
                <Text style={styles.rateTxt}>Metascore</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerActors}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={styles.title}>Top Billed Cast</Text>
              <TouchableOpacity>
                <Text style={{ color: "blue" }}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.containerActorsPic}>
                <View style={styles.actorsDetail}>
                  <Image
                    source={require("./assets/matthew.jpg")}
                    style={styles.actorPic}
                    resizeMode="center,cover"
                  ></Image>
                  <Text numberOfLines={1} ellipsizeMode={"tail"}>
                    Matthew McConaughey
                  </Text>
                  <Text>Cooper</Text>
                </View>
                <View style={styles.actorsDetail}>
                  <Image
                    source={require("./assets/anne.jpg")}
                    style={styles.actorPic}
                    resizeMode="center,cover"
                  ></Image>
                  <Text>Anne Hathaway</Text>
                  <Text>Brand</Text>
                </View>
                <View style={styles.actorsDetail}>
                  <Image
                    source={require("./assets/jessica.jpg")}
                    style={styles.actorPic}
                    resizeMode="center , cover"
                  ></Image>
                  <Text>Jessica Chastain</Text>
                  <Text>Murph</Text>
                </View>
                <View style={styles.actorsDetail}>
                  <Image
                    source={require("./assets/mackenzie.jpg")}
                    style={styles.actorPic}
                    resizeMode="center,cover"
                  ></Image>
                  <Text>Mackenzie Foy</Text>
                  <Text>Murph 10ans</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.credits}>
            <View>
              <Text style={styles.colorWeight}>Director</Text>
              <Text style={styles.color}>Chritopher Nolan</Text>
            </View>
            <View>
              <Text style={styles.colorWeight}>Writers</Text>
              <Text style={styles.color}>
                Jonathan Nolan and Christopher Nolan
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
