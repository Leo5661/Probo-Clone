export type BidCardItem = {
    id: string
    title: string
    status: string
    uri: any
    yesPrice: number
    noPrice: number
}

export const BidCardItemList: Array<BidCardItem> = [
    {
        id: '1',
        title: 'Kolkata to win the match vs Mumbai?',
        status: 'H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0',
        uri: require('@/assets/images/cricket_ball.png'),
        yesPrice: 4.4,
        noPrice: 3.6
    },
    {
        id: '2',
        title: 'Bitcoin to be priced at 58141.24 USDT or more by 04:40 AM?',
        status: 'Bitcoin open price at 04:25 AM was 58141.14 USDT',
        uri: require('@/assets/images/bitcoin.png'),
        yesPrice: 1.8,
        noPrice: 8.2
    },
    {
        id: '3',
        title: 'RCB to win the match vs CSK?',
        status: 'H2H last 5 T20 : RCB 1, CSK 6, DRAW 0',
        uri: require('@/assets/images/cricket_ball.png'),
        yesPrice: 5.8,
        noPrice: 3.2
    },
    {
        id: '4',
        title: 'RCB to win the match vs CSK?',
        status: 'H2H last 5 T20 : RCB 1, CSK 6, DRAW 0',
        uri: require('@/assets/images/cricket_ball.png'),
        yesPrice: 5.8,
        noPrice: 3.2
    },
    {
        id: '5',
        title: 'RCB to win the match vs CSK?',
        status: 'H2H last 5 T20 : RCB 1, CSK 6, DRAW 0',
        uri: require('@/assets/images/cricket_ball.png'),
        yesPrice: 5.8,
        noPrice: 3.2
    },
    {
        id: '6',
        title: 'RCB to win the match vs CSK?',
        status: 'H2H last 5 T20 : RCB 1, CSK 6, DRAW 0',
        uri: require('@/assets/images/cricket_ball.png'),
        yesPrice: 5.8,
        noPrice: 3.2
    },
];