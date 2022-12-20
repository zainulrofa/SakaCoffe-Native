import React, { useState } from 'react';
import {Text, View, ScrollView, Image, TextInput, ToastAndroid, Pressable} from 'react-native';
import ButtonOpacity from '../../components/ButtonOpacity';
import styles from '../../styles/NewProduct';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import camera from '../../assets/images/camera.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import productAction from '../../redux/actions/product';

function NewProduct() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [body, setBody] = useState({})
  const [category, setCategory] = useState();
  const [file, setFile] = useState();
  const token = useSelector(state => state.auth.userData.token)
    console.log(category)
    const changeHandler = (text, name) => {
      setBody(body => ({...body, [name]: text}));
  };
  
  const createProductHandler = () => {
    const success = id => {
      ToastAndroid.showWithGravityAndOffset(
        `Product Created`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
      console.log(id);
      navigation.navigate('AllProduct');
    };
    const error = error => {
      ToastAndroid.showWithGravityAndOffset(
        `${error}`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
    };
    let bodies = new FormData();
    file &&
      bodies.append('image', {
        name: 'test.' + file[0]?.type?.substr(6),
        type: file[0]?.type,
        uri:
          Platform.OS !== 'android' ? 'file://' + file[0]?.uri : file[0]?.uri,
      });
    body.productName && bodies.append('productname', body.productName);
    body.price && bodies.append('price', body.price);
    body.description && bodies.append('description', body.description);
    category && bodies.append('category_id', category);

    dispatch(productAction.createProductThunk(bodies, token, success, error));
  };

  let cameraLauncher = () => {
    let options = {
      storageOptions: {
        saveToPhotos: true,
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        console.log(response);
        return ToastAndroid.showWithGravityAndOffset(
          `Do not have access to open the camera`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };

  let libraryLauncher = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.errorMessage) {
        return ToastAndroid.showWithGravityAndOffset(
          `Do not have access to open the library`,
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
      setFile(response.assets);
    });
  };

  return (
    <>
      <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <IconComunity
          name={'chevron-left'}
          size={20}
          style={styles.icons}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.titleNavbar}>New product</Text>
      </View>
        <View style={styles.all_container}>
          <View style={styles.container_up}>
            <Image source={file ? {uri: file[0].uri} : camera} style={styles.image} />
            <ButtonOpacity
              color={'#000000'}
              text="Add more picture"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={
                {
                  onPress: cameraLauncher
                }
              }
            />
            <ButtonOpacity
              color={'#000000'}
              text="Open Gallery"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={5}
              // onPress={postRegister}
              onPressHandler={{
                onPress: libraryLauncher,
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Product Name</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'productName')}
            />
            <Text style={styles.text}>Price</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product price"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'price')}
            />
            <Text style={styles.text}>Category</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '3'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('3')}>
                  <View
                    style={category === '3' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '3' ? styles.checkedText : styles.uncheckedText
                  }>
                  Food
                </Text>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '1'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('1')}>
                  <View
                    style={category === '1' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '1' ? styles.checkedText : styles.uncheckedText
                  }>
                  Coffee
                </Text>
              </View>
              <View style={styles.radio}>
                <Pressable
                  style={
                    category === '2'
                      ? styles.checkedOuter
                      : styles.unchekedOuter
                  }
                  onPress={() => setCategory('2')}>
                  <View
                    style={category === '2' ? styles.checkedInner : undefined}
                  />
                </Pressable>
                <Text
                  style={
                    category === '2' ? styles.checkedText : styles.uncheckedText
                  }>
                  Non Coffee
                </Text>
              </View>
            </View>
            {/* <TextInput
              style={styles.input_bottom}
              placeholder="Type Category id"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'categoryId')}
            /> */}
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Describe your product max. 150 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'description')}
            />
          </View>
          <View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Save Product"
              radius={20}
              colorText="white"
              height={70}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={
                {
                  onPress: createProductHandler,
                }
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default NewProduct;