import * as React from 'react';
import { SafeAreaView, StyleSheet,View, Text, Image,Alert } from 'react-native';
import { SegmentedButtons, Divider, Button, Searchbar,Card } from 'react-native-paper';
import useGetData from '../custom-hooks/useGetData';
import {firebase} from '../../firebase.config'
import useAuth from '../custom-hooks/useAuth';

const Books = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    // const [docId, setDocId] = React.useState('')
    const [value, setValue] = React.useState('Books');
    const { data: booksData } = useGetData("books");
    const {currentUser, loading} = useAuth();
    const { data: userData } = useGetData("users");
    const { data: alertData } = useGetData("returnAlerts");
    
   var filteredProducts=[];
    // const documentId = filteredProducts[0].id;

    const data = userData.filter(item=>item.email===currentUser.email);
    const filterAlert = alertData.filter(item=>item.uid==data[0].id);
    const filteredBooks = booksData.filter(book => 
      book.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

   const handleIssue= async(ide)=>{
    var book1= booksData.filter(item=>item.id===ide)
    const returnDate1 = new Date();
    returnDate1.setDate(returnDate1.getDate() + 15);
    const formattedReturnDate1 = returnDate1.toLocaleDateString();

    const date= new Date();
    const data2={
      Name: book1[0].Name,
      author: book1[0].author,
      ide: data[0].id,
      createdAt: date.toLocaleDateString(),
      return: formattedReturnDate1,
    }
    console.log(data2)
        const messageRef = firebase.firestore().collection('issuedBooks');
        messageRef.add(data2).then(()=>{
          
          console.log("success")
        }).catch((error)=>{
          console.log(error);
          
        })

    
    if(currentUser){
    console.log(currentUser.email);
    filteredProducts = userData.filter(item=>item.email===currentUser.email);
    }
    
    console.log(filteredProducts);
    try{
        var book= booksData.filter(item=>item.id===ide)
        const documentId = await filteredProducts[0].id;
   
    const documentRef = firebase.firestore().collection("users").doc(documentId);
    const docSnapshot = await documentRef.get();
            const existingBookName = docSnapshot.data()?.bookData || [];
            // existingBookName.push(book.Name);
            const createdAt = new Date().toLocaleDateString();
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 15);
    const formattedReturnDate = returnDate.toLocaleDateString();
            const bookDa= {
              bookName: book[0],
              issueDate: createdAt,
              returnDate: formattedReturnDate,
          }
            const updatedBookName = [...existingBookName, bookDa];
   
        if(updatedBookName){
            console.log(updatedBookName);
        }
        const newRef = await documentRef.update({ bookData: updatedBookName });

        Alert.alert('Success', 'Issue successful!.');
        setValue("Issue")
    }catch(error){
        console.log(error);
    }

    }

    const handleFavourites= async(ide)=>{
        console.log(ide);
        
        console.log(book);
        if(currentUser){
        console.log(currentUser.email);
        filteredProducts = userData.filter(item=>item.email===currentUser.email);
        }
        
        console.log(filteredProducts);
        try{
            var book= booksData.filter(item=>item.id===ide)
            const documentId = await filteredProducts[0].id;
       
        const documentRef = firebase.firestore().collection("users").doc(documentId);
        const docSnapshot = await documentRef.get();
                const existingBookName = docSnapshot.data()?.favourites || [];
                // existingBookName.push(book.Name);
                const updatedBookName = [...existingBookName, book[0]];
        // const bookData= {
        //     bookName: [book[0].Name],
        // }
            if(updatedBookName){
                console.log(updatedBookName);
            }
            const newRef = await documentRef.update({ favourites: updatedBookName });
    
            Alert.alert('Success', 'Added to Favourites!.');
            setValue("Issue")
        }catch(error){
            console.log(error);
        }
    
        }

    // const check=(recieved)=>{
    //     console.log(recieved);
    // }
    // const handleSearch=()=>{
    //   booksData = booksData.filter(item=>item.Name==searchQuery)

    // }

  return (
   
        <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Books',
            label: 'Books',
          },
          {
            value: 'Issue',
            label: 'Issue',
          },
          {
            value: 'Notification',
            label: 'Notifications',
          },
        //   { value: 'drive', label: 'Driving' },
        ]}
      />
      {(value=="Books") && (data) &&(
       <View style={styles.container1}>
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      theme={{ colors: { primary: 'blue' } }}
      style={{marginBottom:15}}
      
    />
      {filteredBooks.map((val, index) => (
        <View key={index}>
        <View  style={styles.row}>
          <Image
            source={{ uri: val.urls[0] }} // Assuming imageUrl field in Firestore
            style={styles.image}
          />
          <View style={{flex:1}}>
          <Text style={styles.text}>{val.Name}</Text>
          <Text style={{fontSize:15,marginLeft:5,}}>{val.author}</Text>
          </View>
          {/* <Text style={{alignItems:'flex-end'}}>{val.email}</Text> */}
          <Button icon="" mode="text" onPress={() => handleIssue(val.id)}>
    Issue
  </Button>
        </View>
        <Divider/>
        </View>
      ))}
    </View>)}

    {(value=='Issue')&& (data) && (<View>{(data[0].bookData)? <View>{data[0].bookData.map((val, index) => (
        <View key={index}>
        <View  style={styles.row}>
          <Image
            source={{ uri: val.bookName.urls[0] }} // Assuming imageUrl field in Firestore
            style={styles.image}
          />
          <View style={{flex:1}}>
          <Text style={styles.text}>{val.bookName.Name}</Text>
       <Text style={{fontSize:15,marginLeft:5,}}>Issue Date:- {val.issueDate}</Text>
          <Text style={{fontSize:15,marginLeft:5,}}>Return Date: {val.returnDate}</Text> 
          </View>
          {/* <Text style={{alignItems:'flex-end'}}>{val.email}</Text> */}
          <Button icon="" mode="text" onPress={() => handleFavourites(val.bookName.id)}>
    +favorites
  </Button>
        </View>
        <Divider/>
        </View>
        
      ))}</View>
      :
      <View style={{marginTop:10,}}><Text>No books issued</Text></View>}
      </View>)}
      {(value=="Notification") && (data) &&(
          <View style={{marginTop:20}}>
              {filterAlert.map((item, index)=>(
                  <View key={index}>
                     <Card  style={{marginTop:10}}>
    <Card.Content>
      {/* <Text variant="titleLarge">{item.Name}</Text> */}
      <Text variant="bodyMedium">Your Issued book {item.Name} by Author {item.author} needs to be returned by {item.returnDate} or Reissued</Text>
    </Card.Content>
  </Card>
                  </View>
              ))}
          </View>
      )}
    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
      flex: 1,
      
    },
    container1: {
        flex: 1,
        padding:5,
        marginTop:10,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom:5,
      },
      image: {
        width: 60,
        height: 60,
        marginRight: 10,
      },
      text: {
        marginBottom:5,
        marginLeft:5,
        fontSize: 17,
      },
  });

export default Books