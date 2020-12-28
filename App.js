import React from 'react';

import  { Text, View,Image,StyleSheet, ScrollView,TouchableOpacity,SafeAreaView} from 'react-native';
var Sound = require('react-native-sound');


const soundList = [
  require('./sounds/one.wav'),
  require('./sounds/two.wav'),
  require('./sounds/three.wav'),
  require('./sounds/four.wav'),
  require('./sounds/five.wav'),
  require('./sounds/six.wav'),
  require('./sounds/seven.wav'),
  require('./sounds/eight.wav'),
  require('./sounds/nine.wav'),
  require('./sounds/ten.wav'),
];

const App = () =>
{

  const playSound = (soundComing) =>{
    // var soundVar =  new Sound(soundComing,Sound.MAIN_BUNDLE,(err)=>{
    //   if(err){
    //     console.warn("Not able to play")
    //   }
    // });

    var soundVar = new Sound(soundComing, (error) => {
      // if (error) 
      // {
      //   console.log('failed to load the sound', error);
      //   return;
      // }
    });

    setTimeout(()=>{
      soundVar.play();

    },1000);

    soundVar.release();
  }


  return(
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <Image style={styles.logo} source={require('./sounds/logo.png')}/>
      
      <View style={styles.mainView}>
                    {soundList.map((sound)=>(
                      <TouchableOpacity
                      key={sound}
                      onPress={() =>{
                        playSound(sound)
                      }}
                      style={styles.button}
                      >
                            <Text style={styles.textView}>{sound}</Text>
                      </TouchableOpacity>
                    ))}
      </View>
        
  
    </ScrollView>
    </SafeAreaView>
  )


};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : "#1b262c"
  },
  logo:{
    alignSelf :"center",
    marginTop:10
  },
  mainView:{
      flex:1,
      margin:5,
      flexDirection:"row",
      flexWrap:"wrap",
      alignItems:"flex-start",
      justifyContent : "space-around",
  },
  button:{
    height:110,
    width:"46%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:5
  },
  textView:{
    fontSize:30,
    color:"#ff4301"
  }
  
});
export default App


