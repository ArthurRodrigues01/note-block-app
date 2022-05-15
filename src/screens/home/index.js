import React from 'react';
import { ScrollView, Button, View } from 'react-native';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Main />
      </ScrollView>
      <Button
        title="Criar"
        onPress={() => navigation.navigate("CreateNote")} />
    </View>

  );
}