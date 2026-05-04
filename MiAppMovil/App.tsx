import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a Progra Movil c:!</Text>
      <StatusBar style="auto" />
        <StatusBar style="auto" />
      <CustomButton
        title={"App"}
        onPress={() => {
          console.log("Press desde boton App");
        } } variant={'secondary'}      />
       <CustomButton
        title={"Secondary Button"}
        onPress={() => {
          console.log("Press desde boton Secundario");
        }}
        variant="secondary"
      />
       <CustomButton
        title={"Tertiary Button"}
        onPress={() => {
          console.log("Press desde boton Secundario");
        }}
        variant="tertiary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});