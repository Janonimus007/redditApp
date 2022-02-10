import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../global/StylesPermission'

const CameraPermission = () => {
  const navigation = useNavigation()
  const gotoNextPermission =()=>{
    navigation.navigate('PushPermission')
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagePermission}>
        <Image
          source={require('../../assets/images/camera.jpeg')}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Camera Access</Text>
        <Text style={styles.text}>Please allow access to your camera to take</Text>
      </View>

      <View style={styles.ContainerButton}>
       <Button 
          style={{marginBottom:25}}
          onPress={()=>gotoNextPermission()}
          mode='contained' 
          >
        Allow</Button>

      <Button 
        >
      cancel</Button>
      </View>


    </View>
  )
}

export default CameraPermission