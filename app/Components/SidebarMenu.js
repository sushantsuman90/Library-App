import * as React from 'react';
import { View } from 'react-native';

import { Drawer, Button } from 'react-native-paper';

const SidebarMenu = () => {
  const [active, setActive] = React.useState('');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  

  return (
    <View>
      <Button onPress={openDrawer}>Open Drawer</Button>
      <Drawer.Section >
        <Drawer visible={isDrawerOpen} onDismiss={closeDrawer}>
          <Drawer.Item label="Item 1" onPress={closeDrawer} />
          <Drawer.Item label="Item 2" onPress={closeDrawer} />
          <Drawer.Item label="Item 3" onPress={closeDrawer} />
        </Drawer>
      </Drawer.Section>
    </View>
  );
};

export default SidebarMenu;