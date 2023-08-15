import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {AppBackground, HomeListItem} from '../../components';
import styles from './styles';
import {useAppDispatch, useAppSelector, useSetupPlayer} from '../../hooks';
import {
  PlayListDataType,
  dashboardActions,
  selectHomeData,
  selectHomeDataLoading,
} from '../../redux/dashboard/dashboardSlice';
import {Layout} from '../../theme';
import {Colors} from '../../theme/Variables';

const ITEM_HEIGHT = 28 + 219;

const renderItem: ListRenderItem<PlayListDataType> = ({item}) => {
  return <HomeListItem playListData={item.data} title={item.title} />;
};

const getKey = (_: any, index: number): string => `home screen list-${index}`;

const getItemLayout = (
  _data: ArrayLike<PlayListDataType> | null | undefined,
  index: number,
) => {
  const dataItems = _data ?? [];
  return {
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * dataItems.length,
    index,
  };
};
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectHomeDataLoading);
  const data = useAppSelector(selectHomeData);
  useSetupPlayer();

  useEffect(() => {
    dispatch(dashboardActions.fetchHomeData());
  }, [dispatch]);

  const renderLoader = useCallback(() => {
    if (isLoading) {
      return (
        <View style={[Layout.fill, Layout.center]}>
          <ActivityIndicator size={'large'} color={Colors.tertiary} />
        </View>
      );
    }
    return null;
  }, [isLoading]);

  return (
    <AppBackground>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={getKey}
        showsVerticalScrollIndicator={false}
        style={styles.flMain}
        contentContainerStyle={styles.flContainer}
        initialNumToRender={3}
        updateCellsBatchingPeriod={1000}
        maxToRenderPerBatch={5}
        getItemLayout={getItemLayout}
        ListEmptyComponent={renderLoader}
      />
    </AppBackground>
  );
};

export default HomeScreen;
