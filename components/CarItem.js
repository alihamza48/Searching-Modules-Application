import { View, TextInput, TouchableOpacity, Image, Text , StyleSheet, Button} from 'react-native';

const CarItem = (props) => {

    console.log(props.make);
    console.log(props.model);


   return( <TouchableOpacity style={styles.carItem}>
      <Image source={props.image} alt="............" style={styles.carImage} />
      <Text style={styles.carMake}>{props.make}</Text>
      <Text style={styles.carModel}>{props.model}</Text>
    </TouchableOpacity>
   )
};


  const styles = StyleSheet.create({
    carItem:{
        width:250,
        maxHeight:"33%",
        // marginBottom:1,
        flex:1,
        alignItems:"center",
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
        height:1,
        overflow: 'hidden',
        marginBottom: 20,
    },
    // carItem: {
    //   width: '45%',
    //   height: 250,
    //   borderRadius: 10,
    //   color:"black",
    // },
    carImage: {
      width: 190,
      height: 120,
      borderRadius:20,
      marginTop:8
    },
    carMake: {
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
      color:"black",
      fontSize:20,
    },
    carModel: {
      marginTop: 5,
      textAlign: 'center',
      color: 'black',
    },
  });

  export default CarItem;