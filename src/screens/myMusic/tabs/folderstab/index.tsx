import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GS from '../../../../utils/styles';
import styleConfig from '../../../../utils/styleConfig';
import colors from '../../../../utils/colors';

const FoldersTab = ({musicFolders}) => {
  const renderFolder = ({item, index}) => {
    return (
      <Text style={[GS.text_white_regular, styles.folderTitle]}>{item}</Text>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={musicFolders}
        renderItem={renderFolder}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderSeparator}
      />
    </View>
  );
};

export default FoldersTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  folderTitle: {
    marginHorizontal: styleConfig.smartWidthScale(20),
    paddingVertical: styleConfig.smartScale(5),
    marginVertical: styleConfig.smartScale(5),
  },
  separator: {
    borderBottomWidth: styleConfig.countPixelRatio(0.4),
    borderBottomColor: colors.tertiary,
    marginHorizontal: styleConfig.smartWidthScale(20),


  },
});
