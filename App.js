import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import StrokeComponent from './stroke';


const usersData = [
  {
    name: 'Aimee Connor',
    userName: '@aimee',
    userImage: 'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2FAimee.png?alt=media&token=f4f34c9a-1cca-4da3-8c94-9af82b338e22',
    category: 'finance'
  },
  {
    name: 'Aimee Connor',
    userName: '@aimee',
    userImage: 'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2FAimee.png?alt=media&token=f4f34c9a-1cca-4da3-8c94-9af82b338e22',
    category: 'finance'
  },
  {
    name: 'Aimee Connor',
    userName: '@aimee',
    userImage: 'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2FAimee.png?alt=media&token=f4f34c9a-1cca-4da3-8c94-9af82b338e22',
    category: 'finance'
  }
]

export default function App() {
  let [fontsLoaded] = useFonts({
    'Albertus': require('./assets/fonts/AlbertusNovaLight.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
         <View style={{flexDirection: 'row'}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Card/>
            <Card/>
          </ScrollView>
         </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}


const Card = () => {
  return (
    <View style={{marginLeft: 60, marginRight: 30}}>
    <View style={{
      height: 400,
      width: 250,
      backgroundColor: 'rgb(245, 244, 240)',
      borderWidth: 1,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      position: 'absolute',
    }}/>
    <View style={{
      height: 400,
      width: 250,
      backgroundColor: 'rgb(245, 244, 240)',
      borderWidth: 1,
      marginLeft: 5,
      marginTop: 5,
      position: 'absolute',
    }}/>
    <View style={{
      height: 400,
      width: 250,
      backgroundColor: 'rgb(253, 251, 247)',
      borderWidth: 1,
      marginBottom: 20,
      marginRight: 20,
    }}>
      <View>
        <Text 
          style={{ 
            fontFamily: 'Albertus',
            fontSize: 25,
            position: 'absolute', 
            marginLeft: '10%',
            marginTop: '2%'
          }}
        >
          Progress Studies
        </Text>
        <StrokeComponent 
          style={{
            marginLeft: 10,
            height: 15,
            width: 220,
            marginTop: '10.5%'
          }}
        />
      </View>
      <View style={{marginLeft: 20, marginTop: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text 
            style={{ 
              fontFamily: 'Albertus',
              fontSize: 11
            }}
          >102 members
        </Text>
        <Text 
          style={{ 
            fontFamily: 'Albertus',
            fontSize: 11,
            color: 'grey'
          }}
        >{' • '}
        </Text>
        <Text 
            style={{ 
              fontFamily: 'Albertus',
              fontSize: 11
            }}
          >2 posts
        </Text>
      </View>
      
      <View style={{width: '90%', marginTop: 20}}>
        <Text 
            style={{ 
              fontSize: 13,
              lineHeight: 17
            }}
          >
            {'Automation. Consumerization. Globalization. 2020 accelerated our shift to the future-of-work. This Column is for operators, investors...'}
        </Text>

        <View style={{marginTop: -30}}>
        {usersData.map((user, i) => {
          return (
              <User
                key={i}
                name={user.name}
                userName={user.userName}
                userImage={user.userImage}
                category={user.category}
              />
          )
        })}
        </View>
        <Button/>
      </View>

      </View>
    </View>
  </View>

  )
}



const Button = () => {
  return (
    <View style={{flexDirection: 'row', height: 40, marginTop: 50, justifyContent: 'center', backgroundColor:'#000000'}}>
       <Text style={{color: '#FFFFFF', marginTop: 10}}>{'+  JOIN COLUMN '}</Text>
    </View>
  )
}


const User = ({name, userName, userImage, category}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', paddingTop: 50}}>
      <View 
        style={{
          flex: 1,
          width: 75,
          height: 75,
        }}
      >
        <Image
          style={{width: 25, height: 25, borderRadius: 12.5, marginLeft: 2, marginTop: 5}}
          source={{
            uri: userImage,
          }}
        />
      </View>
      <View 
        style={{
          flex: 4,
          width: 75,
          height: 75,
        }}>
        <Text 
            style={{ 
              fontSize: 13
            }}
          >{name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text 
              style={{ 
                fontFamily: 'Albertus',
                fontSize: 11
              }}
            >{userName}
          </Text>
          <Text 
            style={{ 
              fontFamily: 'Albertus',
              fontSize: 11,
              color: 'grey'
            }}
          >{' • '}
          </Text>
          <Text 
              style={{ 
                fontFamily: 'Albertus',
                fontSize: 11
              }}
            >{category}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 244, 240)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

