import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../global/StylesPermission'

const MapPermission = () => {
  const navigation = useNavigation()
  const gotoNextPermission =()=>{
    navigation.navigate('DrawerMenu')
  }
  return (
    <View style={styles.container}>
    <View style={styles.imagePermission}>
      <Image
        source={require('../../assets/images/map.jpeg')}
      />
    </View>

    <View style={styles.containerText}>
      <Text style={styles.text}>Enable push notifications</Text>
      <Text style={styles.text}>Enable push notification to let
        send you personal news and updates.
      </Text>      
    </View>


    <View style={styles.ContainerButton}>
     <Button 
          style={{marginBottom:25}}

        onPress={()=>gotoNextPermission()}
        mode='contained' 
       >
      Enable</Button>
    <Button 
     >
    cancel</Button>
    </View>
  </View>
  )
}

export default MapPermission