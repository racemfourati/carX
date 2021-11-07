import React, { useState, useEffect } from 'react';
import { TouchableHighlight, TouchableOpacity, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Nav from "./Nav";
import {Select,VStack,CheckIcon,Center,NativeBaseProvider,} from "native-base"
import axios from "axios";
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
const LOCATION_TASK_NAME = 'background-location-task';

const Wash = ({ navigation }) => {

  let [service, setService] = useState("");
  let [carType , setCarType] = useState("");
  let [washType , setWashType] = useState("")
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = 'Your localisation has been saved';
  }

  return (
    <View style={tailwind("flex flex-col w-full h-full  ")}>
      <View style={tailwind(" h-4/6  flex flex-col  pt-8 ")}>
        <View style={tailwind(" h-2/6   flex flex-row ")}>
          <View style={tailwind(" w-1/12 ")}></View>
          <View style={tailwind(" w-1/12 ")}></View>

          <Nav />


        </View>
        <View style={tailwind(" h-4/6 bg-white flex flex-row  ")}>
          <View style={tailwind(" w-3/12    ")}></View>
          <View style={tailwind(" w-6/12  flex flex-col   ")}>
            <View style={tailwind(" h-1/6")}></View>
            <View style={tailwind(" h-1/6 items-center	  ")}>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={service}
                  minWidth="150"
                  minHeight="8"
                  accessibilityLabel="Choose Service"
                  placeholder="Car Type"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setCarType(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item label="Cross Platform Development" value="cross" />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6 items-center  ")}>
              <VStack alignItems="center" space={4}>
                <Select
                  selectedValue={service}
                  minWidth="150"
                  minHeight="8"
                  accessibilityLabel="Choose Service"
                  placeholder="Localisation"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item label="Cross Platform Development" value="cross" />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6 items-center  ")}>
              <VStack alignItems="center" space={8}  minHeight="128" >
                <TouchableOpacity  >
                  <Text style={tailwind("  text-center text-gray-500 pt-8 ")}>{text} </Text>
                </TouchableOpacity>
              </VStack>
            </View>
            <View style={tailwind(" h-1/6   flex flex-row ")}>

              <View style={tailwind(" w-2/6   ")}></View>

            </View>
          </View>
          <View style={tailwind(" w-3/12    ")}></View>
          {/* <SelectDropdown
      /> */}
        </View>
      </View>
      <View style={tailwind(" h-1/6 flex flex-row  ")}>
        {/* <Footer  />  */}
        <View style={tailwind(" w-4/12   ")}></View>
        <View style={tailwind("  w-4/12 items-center  flex flex-col")}>
          <View style={tailwind(" h-1/6   ")}></View>
          <View>
            <TouchableHighlight onPress={() => navigation.navigate('Confirmation')} style={tailwind('p-2 w-32 h-10 bg-yellow-600 text-gray-100 text-lg rounded-lg  border-yellow-300 		')}>
              <Text style={tailwind(" text-center text-white ")}>
                Next
              </Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    </View>
  );


}

export default function WashPage({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Wash navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    alert(error)
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    alert(JSON.stringify(locations))//will show you the location object
    //lat is locations[0].coords.latitude & long is locations[0].coords.longitude
    // do something with the locations captured in the background, possibly post to your server with axios or fetch API 
  }
});