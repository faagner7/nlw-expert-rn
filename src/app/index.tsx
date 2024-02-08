import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
  const defaultCategory = CATEGORIES[0]

  const [categorySelected, setCategorySelected] =
    useState<string>(defaultCategory)

  return (
    <View className='flex-1 pt-8'>
      <Header title='Faça seu pedido' cardQuantityItems={1} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === categorySelected}
            onPress={() => setCategorySelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}
