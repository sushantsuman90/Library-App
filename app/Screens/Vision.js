import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

export default function Vision() {
  return (
    <View>
    <View style={styles.Content}>
       <Card>
    <Card.Content>
      <Text variant="titleLarge">Vision</Text>
      <Text variant="bodyMedium">To transform Rumi Library into a world-class learning resource center, so as to provide a dynamic and collaborative learning environment that supports and enhances teaching, learning & research by facilitating equitable and inclusive access to resources.</Text>
    </Card.Content>
  </Card>
    </View>
    <View style={styles.Content}>
       <Card>
    <Card.Content>
      <Text variant="titleLarge">Mission</Text>
      <Text variant="bodyMedium">● To provide well-equipped & vibrant, inclusive physical spaces, where all sections of learners can pursue independent knowledge goals outside the classroom and engage in meaningful experience. ● Maximize availability of Resources ● Ensure anywhere, anytime access to all knowledge resources through the use of modern technologies. ● Promote research by way of increasing awareness of emerging issues like research ethics & academic integrity, plagiarism, copyright, creative commons licensing, self-publishing, citation metrics etc. ● Ensure the long-term physical & digital preservation of library resources.</Text>
    </Card.Content>
  </Card>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({

  Content:{
    backgroundColor: "white",
    display:"flex",
    marginTop:10,
    marginHorizontal: 20,
  },
})