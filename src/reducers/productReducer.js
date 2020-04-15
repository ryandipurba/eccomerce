const initialState = {
    product: [{
        id: 1,
        name: 'Gundam',
        price: 1200000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/6/2849269/2849269_aff5a0aa-1474-4ca3-9f80-44b34f7bdae1_1200_1200.jpg'
    },
    {
        id: 2,
        name: 'Dji Phantom 5',
        price: 20000000,
        details: 'lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://liupurnomo.com/wp-content/uploads/2018/10/Drone-Dji-Phantom-3-Advanced-4.jpg'
    },
    {
        id: 3,
        name: 'Go Pro Hero 5',
        price: 8000000,
        details: 'lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx3xEKcnWBn-l2tzCsLJVFP9_2xLyV-0EatoL6I-tOnXPoUvPQ&usqp=CAU'
    },
    {
        id: 4,
        name: 'Samsung MicroSD 128GB EVO PLUS',
        price: 500000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkbcyKOiArmoj2lzXReAWv6H2EwVmq2boxLN376iL69TBYraYi&usqp=CAU'
    },
    {
        id: 5,
        name: 'Sony A7 Mark ii',
        price: 15000000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHKzvpKD3Vzl6trW71w6MOTV7omsEsTvnBNUpbjd4vAKvRqPB&usqp=CAU'
    },
    {
        id: 6,
        name: 'Xiaomu Note 8',
        price: 2000000,
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quia autem minus assumenda exercitationem sunt ab, et sit architecto',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ_yvT0I-FW3MxWEwgrXzFS1VNv94QQyAK88mT6gPCFs01wAQB&usqp=CAU'
    },]
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default productReducer