import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: "black",

    flex: 1,
  },
  containerLogo: {
    backgroundColor: "green",
  },

  logo: {
    height: 80,
    width: 80,
  },
  containerMovie: {
    backgroundColor: "gray",
    marginBottom: 15,
  },
  title: {
    fontWeight: "300",
    fontSize: 35,
    color: "white",
    marginBottom: 10,
  },

  containerDetail: {
    flexDirection: "row",
    marginVertical: 15,
  },

  filmPic: {
    height: 150,
    width: 110,
    marginHorizontal: 5,
  },

  text: {
    width: 300,
    marginHorizontal: 5,
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: "center",
  },
  containerRate: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  rate: {
    justifyContent: "center",
    alignItems: "center",
  },
  rateTxt: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },

  containerActors: {
    backgroundColor: "gray",
  },
  containerActorsPic: {
    flexDirection: "row",
  },

  actorsDetail: {
    width: 140,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 5,
    backgroundColor: "blue",
  },

  actorPic: {
    height: 200,
    width: 140,
  },

  color: {
    color: "white",
  },
  colorWeight: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20",
  },
  credits: {
    height: 100,
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default styles;
