let defaultState = {
    users: [
        {
            id: '1',
            userName: 'Miku',
            status: 'Whahahah',
            photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
            country: 'Rishi',
            city: 'GRA Base',
            followed: false,

        },
        {
            id: '2',
            userName: 'Miku',
            status: 'Whahahah',
            photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
            country: 'Rishi',
            city: 'GRA Base',
            followed: false,

        },
        {
            id: '3',
            userName: 'Miku',
            status: 'Whahahah',
            photoUrl: 'https://sun9-71.userapi.com/c857636/v857636740/1f1850/36kyC-EZ40Y.jpg',
            country: 'Rishi',
            city: 'GRA Base',
            followed: false,

        },
    ],
};

function usersReducer(state = defaultState, action) {

    switch (action.type) {

        // Подписаться на пользователя
        case 'SUBSCRIBE' : {

            break;
        }

        // Отписаться от пользователя
        case 'UNSUBSCRIBE' : {

            break;
        }

        default:
            return state;
    }

    return state;
}

export default usersReducer;
