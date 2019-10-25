const constantStyles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 6,
    marginBottom: 0
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: "90%",
    minHeight: 100,
    marginHorizontal: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    marginVertical: 15
  },
  cardLink: {
    color: "blue"
  },
  row: {
    flexDirection: "row"
  },
  title: {
    fontSize: 28,
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold"
  },
  tableText: {
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    alignSelf: "center"
  },
  loading: {
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
};

module.exports = constantStyles;
