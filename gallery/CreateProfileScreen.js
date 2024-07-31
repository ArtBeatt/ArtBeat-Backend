import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GalleryImagePicker from './GalleryImagePicker';

const CreateProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
      <GalleryImagePicker />
      {/* Other profile creation components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CreateProfileScreen;
