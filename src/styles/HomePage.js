import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  title: {
    // fontFamily: "Poppins-Bold",
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
    width: 300,
    marginVertical: 20
  },
   wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    // marginLeft: 40,
     marginRight: 25,
    borderRadius: 30,
    backgroundColor: '#EFEEEE',
    elevation: 1,
    shadowColor: '#393939',
  },
  Icons: {
    fontSize: 30,
    marginHorizontal: 3,
    color: 'grey',
  },
  iconSearch: {
    color: '#000',
    fontSize: 20,
    marginRight: 10,
  },
  textPlaceholder: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
    color: '#6A4029'
  },
  container:{
    marginTop: 10,
    paddingLeft: 20,
  },
  category:{
    // fontFamily: "Poppins-Bold",
    fontWeight: 'bold',
    color: "#6A4029",
    fontSize: 17,
    paddingTop: 2
  },
  card: {
    marginTop: 50,
    position: 'relative',
    backgroundColor: 'white',
    width: 220,
    height: 270,
    shadowColor: "#3939391A",
    elevation: 1,
    borderRadius: 30,
    marginHorizontal: 20
  },
  imageCard: {
    width: 168,
    height: 189,
    borderRadius: 20
  },
  containerImage:{
    position: "relative",
    left: 25,
    top:-35 
  },
  containerTitle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    // fontFamily: "Poppins-Bold",
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    width: "50%",
    lineHeight: 22.29
  },
  cardPrice: {
    // fontFamily: "Poppins-Bold",
    fontWeight: 'bold',
    fontSize: 17,
    color: "#6A4029"
  },
  see: {
    textAlign: 'right',
    paddingRight: 25,
    // fontFamily: 'Poppins-Reguler',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6A4029'
  },
  btnLoading: {
    width: 168,
    height: 450,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  addCircle: {
    position: 'relative',
    bottom: 70,
    fontSize: 80,
    marginHorizontal: 3,
    color: '#6A4029',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    // margin: 20,
    // backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 10,
    width: 200,
    // marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    paddingVertical: 20,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#FFBA33",
  },
  textStyle: {
    color: "#6A4029",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontFamily:'Poppins-Bold',
    width: 200,
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center"
  },
  removeCircle: {
    fontSize: 80,
    marginHorizontal: 3,
    marginVertical: 35,
    color: '#FFBA33',
    // backgroundColor: 'white',
    borderRadius: 100
  },
});

export default styles;