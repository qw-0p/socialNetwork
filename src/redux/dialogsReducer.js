const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'HA'},
        {id: 3, message: 'HI'},
        {id: 5, message: 'Ho'},
        {id: 4, message: 'HI'}
    ],
    dialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Vitya'},
        {id: 5, name: 'Yarikk'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;
