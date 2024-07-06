export type CategoryItem = {
    id: number;
    name: string;
    uri: any;
}

export const CategoryItemList: Array<CategoryItem> = [
    {
        id: 1,
        name: 'Cricket',
        uri: require('@/assets/images/cricket_ball.png'),
    },
    {
        id: 2,
        name: 'Crypto',
        uri: require('@/assets/images/bitcoin.png'),
    },
    {
        id: 3,
        name: 'Football',
        uri: require('@/assets/images/football.png'),
    },
    {
        id: 4,
        name: 'Stocks',
        uri: require('@/assets/images/stocks.png'),
    },
    {
        id: 5,
        name: 'Economy',
        uri: require('@/assets/images/eco.png'),
    },
]