import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function Footer() {
    return (
       <>
         <View style={tailwind(" w-3/12 ")}></View>
            <View style={tailwind(" w-1/12  ")}></View>
            <View style={tailwind(" w-1/12  ")}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 
</svg> */}
            </View>
            <View style={tailwind(" w-1/12 ")}></View>
            <View style={tailwind(" w-1/12  items-center")}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg> */}
            </View>
            <View style={tailwind(" w-1/12 ")}></View>
            <View style={tailwind(" w-1/12  ")}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg> */}
            </View>

            <View style={tailwind(" w-3/12 ")}></View>
       </>
    )
}
