import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { categoryArray } from "./data";
import { cardArray } from "./data";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <View className="mt-8 mb-2 mx-5">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cardArray}
          renderItem={({ item }) => {
            return (
              <View className="bg-[#EFCFE3] my-3 p-3 rounded-md box-border">
                <View className="px-2 py-2">
                  <View className="flex-row justify-between items-center ">
                    <Text className="font-semibold  text-[16px]">
                      {item.hotelName}
                    </Text>
                    <Text className="text-[16px] ">$ {item.price}</Text>
                  </View>
                  <View className="flex flex-row space-x-1 items-center ">
                    <Ionicons size={10} name="location" color={"#E27396"} />
                    <Text className="font-light text-[10px] ">
                      {item.location}
                    </Text>
                  </View>
                  <View className="flex-row space-x-1 items-center mt-2 ">
                    <Ionicons name="bed" color="#E27396" size={15} />
                    <Text className="font-md ">{item.roomType}</Text>
                  </View>
                  <View className="flex-row space-x-1 items-center mt-2">
                    <Ionicons
                      name="checkmark-circle"
                      color="#E27396"
                      size={15}
                    />
                    {item.amenities.map((item, index) => (
                      <Text style={{ maxWidth: "80%" }} className="mr-2">
                        {item}
                      </Text>
                    ))}
                  </View>
                </View>
                <TouchableOpacity className="flex-row justify-center items-center bg-[#E27396] p-3 mt-5 rounded-lg ">
                  <Text className="text-white">Book Now</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
