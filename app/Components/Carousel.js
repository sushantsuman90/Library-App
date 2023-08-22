import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const Carousel = ({ images, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (flatListRef.current && currentIndex !== 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          );
          handleImageChange(newIndex);
        }}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer,{ width: screenWidth }] }>
            <Image source={item}  style={[styles.image, { width: screenWidth }]} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
  
    height: '100%',
  },
  image: {
    
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 0,
  },
});

export default Carousel;
