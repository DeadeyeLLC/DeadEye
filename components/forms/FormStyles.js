import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../constants/Colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    formContainer: {
      padding: 35,
      marginBottom: 15
    },
    input: {
      height: 40,
      width: 300,
      backgroundColor: "rgba(225,225,225,0.3)",
      marginBottom: 10,
      padding: 10,
      color: "#fff",
      borderRadius: 20
    },
    buttonContainer: {
      width: 300,
      backgroundColor: "#000000",
      paddingVertical: 15,
      borderRadius: 20
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "700"
    }
  });