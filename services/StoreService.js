import { AsyncStorage } from "react-native";

export default class StoreService {


    static async SaveData(key, value) {

        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log("Error saving data")
        }
    }

    static async GetData(key) {

        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.log("Error getting data")
        }
    }

    static async Clear() {

        try {
            return await AsyncStorage.clear();
        } catch (error) {
            console.log("Error clearing data")
        }
    }
}