import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const GalleryImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 300,
      maxHeight: 300,
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response);
      }
    });
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.log('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: selectedImage.fileName,
    });

    try {
      const response = await axios.post('https://your-api-endpoint.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      // Handle success, like updating user's profile with the image URL
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage}>
        <Text style={styles.selectButton}>Select Image from Gallery</Text>
      </TouchableOpacity>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <FastImage
            source={{ uri: selectedImage.uri }}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Button title="Upload Image" onPress={handleUpload} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButton: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default GalleryImagePicker;
