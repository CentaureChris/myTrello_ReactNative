import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, FlatList,TouchableOpacity } from 'react-native';
import { stylesBoard } from '../styles/board';

// Datas for dashboard: 
// const datas= [
//      {
//          id: 1,  
//          name: "Projet 1",
//          todos: [
//                     {
//                         nom:"todo 1",
//                         description: "blablalba",
//                         attributed_to: [1],
//                         status: 1 (eg: in dev)
//                     }
//                  ],
//      }
// ]

const DATA = [
    {
        id: 1,  
        title: "Projet 1",
        todos: [
                {
                    nom:"todo 1",
                    description: "blablalba",
                    attributed_to: [1],
                    status: 1,
                }
            ],
    },
    {
        id: 2,  
        title: "Projet 2",
        todos: [
                {
                    nom:"todo 1",
                    description: "dczd",
                    attributed_to: [1],
                    status: 1,
                }
            ],
    },
  ];

  const Item = ({ title }) => (
    <View style={stylesBoard.item}>
      <Text style={stylesBoard.title}>{title}</Text>
    </View>
  );

export function Board({navigation}) {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return (
        <SafeAreaView style={stylesBoard.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Project')}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View >
        </SafeAreaView>
    )
}
