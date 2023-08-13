import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {AppBackground, HomeListItem} from '../../components';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  HomeDataType,
  PlayListDataType,
  dashboardActions,
  selectHomeData,
  selectHomeDataLoading,
} from '../../redux/dashboard/dashboardSlice';
import {Layout} from '../../theme';

const ITEM_HEIGHT = 28 + 219;

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectHomeDataLoading);
  const data = useAppSelector(selectHomeData) as HomeDataType;

  useEffect(() => {
    dispatch(dashboardActions.fetchHomeData());
  }, []);

  const renderItem: ListRenderItem<PlayListDataType> = useCallback(({item}) => {
    return <HomeListItem playListData={item.data} title={item.title} />;
  }, []);

  const getKey = useCallback((_: any, index: number): string => `${index}`, []);

  const getItemLayout = useCallback(
    (_data: ArrayLike<PlayListDataType> | null | undefined, index: number) => {
      const dataItems = _data ?? [];
      return {
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * dataItems.length,
        index,
      };
    },
    [],
  );

  const renderLoader = useCallback(() => {
    if (isLoading) {
      return (
        <View style={[Layout.fill, Layout.center]}>
          <ActivityIndicator />
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
