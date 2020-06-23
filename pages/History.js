
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { List, ListItem, SearchBar } from "react-native-elements";
import CardView from 'react-native-cardview';

function History({ navigation }) {

//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(true)


//     useEffect(() => {
//        getHistorialData()
//       });


//     async function getHistorialData() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const json = await response.json()
//         setData(json)
//         setIsLoading(false)
//         console.log("GOT DATA");
        
//     }



//     if(isLoading) {
//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator size="large" animating />
//             </View>
//         )
//     } else {
//         return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={data}
//                 renderItem={ ({item}) => {
                    
//                     <Text>{item.title}</Text>
//                 }}
//                 keyExtractor={(item, index) => index}

//             />
//     </SafeAreaView>
//         )
//     }
    
// }



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"

//     }
// })

    let i = 0
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [seed, setSeed] = useState(1);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        makeRemoteRequest();

    }, []);

    const makeRemoteRequest = () => {
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        setLoading(true)

        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (page === 1) {
                    setData(res.results)
                }else{
                    setData([...data, ...res.results])
                } 
               setError(res.error || null)
               setLoading(false)
               setRefreshing(false)
               
            })
            .catch(error => {
                setError(error)
                setLoading(false)
                
            });
    };

    const handleRefresh = () => {
        setPage(1)
        setSeed(seed + 1)
        setRefreshing(true)
        setPage(1)
        makeRemoteRequest();      
    };


    const handleLoadMore = () => {
        setPage(page + 1)
        makeRemoteRequest();
        
    };

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    const renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View
              style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#CED0CE"
              }}
            >
              <ActivityIndicator animating size="large" />
            </View>
          );
        };
      

        return (
            <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <FlatList
                data={data}
                renderItem={({ item, index}) => (
                  <ListItem
                  key={i++}
                    roundAvatar
                    title={`${item.name.first} ${item.name.last}`}
                    subtitle={item.email}
                    avatar={{ uri: item.picture.thumbnail }}
                    containerStyle={{ borderBottomWidth: 0 }}
                  />
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={renderSeparator}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={100}
              />
            </View>
          );
}


History.navigationOptions = () => {
    return {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#7D57FE'
        },       
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 50,
    },
    itemContainer: {

    }
})

export default History
