import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import ButtonOpacity from '../../components/ButtonOpacity';
import styles from '../../styles/EditPromo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import camera from '../../assets/images/camera.png';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import promoActions from '../../../redux/actions/promo';

function EditPromo(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [file, setFile] = useState();
  const token = useSelector(state => state.auth.userData.token);
  const detail = useSelector(state => state.promos.detail);
  const isLoading = useSelector(state => state.promos.isLoading);
  const id = props.route.params;

  const changeHandler = (text, name) => {
    setBody(body => ({...body, [name]: text}));
  };

  const editPromoHandler = () => {
    const success = () => {
      ToastAndroid.showWithGravityAndOffset(
        `Promo Updated`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
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
    body.promoName && bodies.append('promo_name', body.promoName);
    body.discount && bodies.append('discount', body.discount);
    body.description && bodies.append('description', body.description);
    body.code && bodies.append('code', body.code);
    body.duration && bodies.append('duration', body.duration);
    body.minPrice && bodies.append('min_price', body.minPrice);
    console.log(bodies);
    console.log(body);

    dispatch(promoActions.editPromoThunk(id, bodies, token, success, error));
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

  useEffect(() => {
    dispatch(promoActions.getPromoDetailThunk(id, token));
  }, [dispatch]);

  return (
    <>
      <ScrollView>
        <View style={styles.all_container}>
          <View></View>
          <View style={styles.container_up}>
            <Image
              style={styles.image}
              source={
                file
                  ? {uri: file[0].uri}
                  : detail.image
                  ? {uri: detail.image}
                  : camera
              }
            />
            <ButtonOpacity
              color={'#000000'}
              text="Open Camera"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={{
                onPress: cameraLauncher,
              }}
            />
            <ButtonOpacity
              color={'#000000'}
              text="Open Gallery"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={{
                onPress: libraryLauncher,
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Promo Name</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={
                detail?.promo_name || 'Type promo name max. 30 characters'
              }
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'promoName')}
            />
            <Text style={styles.text}>Discount</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={
                detail.discount ? detail.discount : 'Type Discount Percentage'
              }
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={num =>
                changeHandler(parseInt(num) / 100, 'discount')
              }
            />
            <Text style={styles.text}>Promo Code</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={detail.code ? detail.code : 'Type Promo Code'}
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'code')}
            />
            <Text style={styles.text}>Promo Durations</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={
                detail.duration ? detail.duration : 'Type Promo Durations'
              }
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'duration')}
            />
            <Text style={styles.text}>Promo Minimum Price</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={
                detail.min_price ? detail.min_price : 'Type Promo Durations'
              }
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(parseInt(text), 'minPrice')}
            />
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={
                detail.description
                  ? detail.description
                  : 'Describe your promo max. 150 characters'
              }
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={text => changeHandler(text, 'description')}
            />
          </View>
          <View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Create Promo"
              radius={20}
              colorText="white"
              height={70}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={{
                onPress: editPromoHandler,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default EditPromo;