import React from 'react';
import { ScrollView, Button } from 'react-native';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

export default function Home({ navigation }) {
    return (
      <ScrollView>
          <Main/>
          <Button
          title="Mudar"
          onPress={ () => navigation.navigate ("CreateNote")}/>
          <Footer>@ArtProductions</Footer>
      </ScrollView>
    );
  }