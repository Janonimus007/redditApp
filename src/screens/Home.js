import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getMeme } from '../api/memes'
import { useFocusEffect } from '@react-navigation/native'
import  Axios  from 'axios'
import { ActivityIndicator, TextInput } from 'react-native-paper'
const Home = () => {
  const [posts, setPosts] = useState(null)
  useFocusEffect(
    useCallback(() => {
        (async ()=>{
          const response = await getMeme()
          setPosts(response.data.data.children)
        })()
      },
      [],
    )
  )
  return (
    <View style={styles.container}>
      
    {posts === null?(
        <View style={{flex:1,justifyContent:'center'}}>
          <ActivityIndicator/>        
        </View>
      ):(
        <>
        <View style={{flex:1}}>
          <TextInput
          style={{marginVertical:20}}
          label={'Search'}/>
          {
            posts.map(post =>{
              console.log('shitposting? ',post.data.link_flair_text,'image?',post.data.post_hint,'imagen url: ',post.data.url);
              if(post.data.link_flair_text==='Shitposting' && post.data.post_hint==='image'){
                return(
                  <View key={post.data.id} style={styles.containerCard}>
                    <Image
                    style={styles.images}
                      source={{uri:`${post.data.url}`}}
                    />
                    <View style={styles.containerScoreText}>
                      <Text>{post.data.score}</Text>     
                      <View style={styles.containertextComments}>
                        <Text style={styles.title}>{post.data.title}</Text>
                        <View>
                          <Text>{post.data.num_comments}</Text>                        
                        </View>  
                      </View>
                    </View>
                  </View>                  
                )
              }
            })
          } 
        </View>        
        </>

      )}        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  containerCard:{
    flex:1,
    height:'50%'
  },
  images:{
    borderTopRightRadius:10,
    width:'100%',
    height:'70%'
  },
  containerScoreText:{
    flexDirection:'row',
    
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    marginTop:'2%'
  },
  commentsContainer:{
    flexDirection:'row'
  },
  containertextComments:{
    marginLeft:'5%'
  }
})