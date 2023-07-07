import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Carousel from '../Components/Carousel';
// import SidebarMenu from './app/Components/SidebarMenu';
import { Drawer, Button } from 'react-native-paper';
import { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

import icon1 from '../../assets/icon1.jpeg';
import icon2 from '../../assets/icon2.jpeg';
import icon3 from '../../assets/icon3.jpeg';
import book from '../../assets/book.png';
import people from '../../assets/people.png';
import support from '../../assets/support.png';
import collection from '../../assets/collection.png'
import opac from '../../assets/research.png'
import library from '../../assets/online-library.png';
import openAccess from '../../assets/open-access.png';
import favorite from '../../assets/favorite.png'
import catalogue from '../../assets/catalogue.png'
import logo from '../../assets/logo.jpeg'
import menu1 from '../../assets/menu1.png'

// const Card = ({ color, imageSource }) => {
//   return (
//     <View style={[styles.card, { backgroundColor: color }]}>
//       <Text>Tab</Text>
//     </View>
//   );
// };

export default function Home({navigation}) {
 
  const navigator = useNavigation();
  const images = [
    require('../../assets/jj.jpg'),
    require('../../assets/jj3.jpg'),
    require('../../assets/jj2.jpg'),
    // Add more images here
  ];

 const openDrawer1 =()=>{
  navigator.openDrawer();
 }

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <ScrollView>
      <View style={styles.topBar}>
      <Image source={logo} style={styles.icon}/>
           <Text style={{color: '#fff', left: 10,fontSize:20}}>Rumi Library</Text>
           <TouchableOpacity onPress={openDrawer1}><Image source={menu1} style={{ height: 33, width: 33, padding:10,borderRadius:10, left:165,}}/></TouchableOpacity>
      </View>
     {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            style={styles.tab}
            key={tab.id}
            onPress={() => handleTabPress(tab.link)}
          >
            <Text style={styles.tabText}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      <View style={styles.page}>
      
      {/* <View style={styles.header}>
      
      <Carousel images={images} interval={5000} />
      </View> */}
      <View style={styles.new}>
      {/* <Text>tabs</Text> */}
      </View>
      <View><Text style={styles.headline}>ISLAMIC UNIVERSITY OF SCIENCE AND TECHNOLOGY</Text></View>

  <View style={styles.menu}>
  <View style={styles.row}>
    <TouchableOpacity><Surface  style={styles.surface} elevation={3}>
      <Image source={icon3} style={styles.icon}/>
      <Text>HOME</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("E-RESOURCES")}><Surface style={styles.surface} elevation={3}>
    <Image source={book} style={styles.icon}/>
    <Text>E-RESOURCES</Text>
    </Surface>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
  <TouchableOpacity onPress={()=>navigation.navigate("LIBRARY ALERTS")}><Surface style={styles.surface} elevation={3}>
    <Image source={icon1} style={styles.icon}/>
    <Text>LIBRARY ALERTS</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("PEOPLE")}><Surface style={styles.surface} elevation={3}>
    <Image source={people} style={styles.icon}/>
    <Text>PEOPLE</Text>
    </Surface>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
  <TouchableOpacity onPress={()=>navigation.navigate("SERVICES")}><Surface style={styles.surface} elevation={3}>
    <Image source={support} style={styles.icon}/>
    <Text>SERVICES</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("FEEDBACK")}><Surface style={styles.surface} elevation={3}>
    <Image source={icon2} style={styles.icon}/>
    <Text>FEEDBACK</Text>
    </Surface>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
  <TouchableOpacity onPress={()=>navigation.navigate("COLLECTION")}><Surface style={styles.surface} elevation={3}>
    <Image source={collection} style={styles.icon}/>
    <Text>COLLECTIONS</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://192.168.124.143/webopac')}}><Surface style={styles.surface} elevation={3}>
    <Image source={opac} style={styles.icon}/>
    <Text>OPAC</Text>
    </Surface>
    </TouchableOpacity>
    
  </View>
  <View style={styles.row}>
  <TouchableOpacity onPress={()=>navigation.navigate("DIGITAL LIBRARY")}><Surface style={styles.surface} elevation={3}>
    <Image source={library} style={styles.icon}/>
    <Text>DIGITAL LIBRARY</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("OPEN ACCESS")}><Surface style={styles.surface} elevation={3}>
    <Image source={openAccess} style={styles.icon}/>
    <Text>OPEN ACCESS</Text>
    </Surface>
    </TouchableOpacity>
    
  </View>
  <View style={styles.row}>
  <TouchableOpacity onPress={()=>navigation.navigate("FAVORITES")}><Surface style={styles.surface} elevation={3}>
    <Image source={favorite} style={styles.icon}/>
    <Text>FAVORITES</Text>
    </Surface>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("CATALOGING")}><Surface style={styles.surface} elevation={3}>
    <Image source={catalogue} style={styles.icon}/>
    <Text>CATALOGING</Text>
    </Surface>
    </TouchableOpacity>
  </View>
</View>

{/*       
      <View style={styles.Content}>
       <Card>
    <Card.Content>
      <Text variant="titleLarge">About</Text>
      <Text variant="bodyMedium">Central library of the Islamic University of Science and Technology (IUST) incepted its operations in 2005 at the academic block of the University and subsequently in 2010 from Skill and Enhancement Training (SET) building. The library however is now housed in mega structure in the campus which has been recently completed. The library has been named as “Rumi Library” by the Executive Council. The building has been designed to provide the most modern facilities to its patrons. The building is octagonal in shape with a plinth area of 1574 (Sq mtr) and acts as the signature building of the University. It is G+3 framed building with ground floor housing mini conference cum meeting hall, space for cafeteria and other sections. The first floor has atrium, reference section, journal section, acquisition section, circulation counter for the issue/return and other sections/offices of the library. The second-floor houses text/lending sections, technical processing and browsing centre with 50 computer terminals. Similarly, the third floor holds text/lending sections, newspapers archive section and reading/discussion rooms. Apt to mention here, that the library is growing each year and has about 50,000 volumes of books. The library subscribes to about 65 Print journals/magazines and has access to over 12000 journals through various consortiums for knowledge updation and research trend identification across the globe. Moreover, in order to support needy and meritorious students as a part of social responsibility, the library introduced “Book Bank” facility which has a separate collection of 763 books other than the library books. Furthermore, to assist job seekers desperately seeking for resources to prepare for various competitive examinations and brush up their skills, the library maintains “Career Corner” with 638 books. In addition, Rumi Library subscribes to 14 leading national as well as local newspapers to keep users abreast of nascent affairs around the globe. The library has the institutional membership with different national-level organizations to offer effective services to its users which include eShodhSindhu Consortium (ESS), DELNET, New Delhi, ShodhGanga etc. In future, the Rumi library of IUST intends to create upgraded “Learning Resource Centre for Visually Impaired Students” and “institutional digital repository”.</Text>
    </Card.Content>
  </Card>
    </View> */}
    
    </View>
    </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{

    top:5,
    paddingTop:10,
    borderRadius: 20,
    backgroundColor:"#fff",

  },
  top:{
    height:30,
    backgroundColor: '#fff',
  },
  topBar:{
    // justifyContent: 'space-around',
    top:5,
    flexDirection: 'row',
    height:80,
    padding:20,
  },
  headline:{
    justifyContent: 'center',
    textAlign: 'center',
    
  },
  header: {
    height: 230,
  padding: 10,
    marginTop: 0,
    borderRadius: 0,
    
  },
  content: {
    flex: 3,
    // Add styles for the remaining content
  },
 
  tabsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 30,
    borderColor: "white",
    borderLeftWidth: 1,
    backgroundColor: '#002147',
    marginRight: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  Content:{
    backgroundColor: "white",
    display:"flex",
    marginHorizontal: 20,
  },
  new:{
    alignItems: "center",
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#002147",
  },
  gridContainer: {
    padding:16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    top:10,
    width: '48%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  surface: {
    padding: 5,
    top:0,
    bottom:20,
    height: 160,
    width: 183,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'column',
    padding: 10,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    bottom:5,
    
  },
});

 {/* <View style={styles.gridContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} color={card.color} imageSource={card.imageSource} />
        ))}
      </View> */}