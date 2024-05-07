import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text , StyleSheet, Button} from 'react-native';
import CarItem from './CarItem';

const Search = () => {
  const [cars, setCars] = useState([
    
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, image: require("../assets/image1.png") },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, image: require("../assets/image2.png") },
    // more car objects...
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

//   const filteredCars = cars.filter(car => car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase()));

 
const searchCars = () => {
    setFilteredCars(
      cars.filter(car => car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if(!filteredCars){
        concole.log("No Car")
    }
    console.log(filteredCars)
  };

 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search cars..."
        onChangeText={text => setSearchTerm(text)}
        // onEndEditing={searchCars}
      />
       <TouchableOpacity onPress={searchCars} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <View style={styles.carGrid}>
        {filteredCars?.map(car => (
          <CarItem key={car.id} make={car.make} model={car.model} image={car.image} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:30,
    
},
button:{
    borderRadius:20,
    borderColor:"black",
    borderWidth:2,
    padding:5,
    backgroundColor:"rgb(240,240,240)",
},
// buttonText:{
//      fontSize:70,
// },
searchBar: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  carGrid: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderColor:"black",
    // borderRadius:20,
    // borderWidth:2,
    // padding:20,
  },
  carItem: {
    width: '45%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: '100%',
    color:"black",
  },
  carMake: {
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  carModel: {
    marginTop: 5,
    textAlign: 'center',
    color: '#666',
  },
});

export default Search;