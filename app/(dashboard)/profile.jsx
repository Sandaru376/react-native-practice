import { StyleSheet } from "react-native"
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemeText"
import ThemedView from "../../components/ThemedView"

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        Your Profile
      </ThemedText>

      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
})