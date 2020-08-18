const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: 'HI'},
    {id: 2, message: 'HA'},
    {id: 3, message: 'HI'},
    {id: 5, message: 'Ho'},
    {id: 4, message: 'HI'},
  ],
  dialogs: [
    {id: 1, name: 'Aleksandr'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Pavel'},
    {id: 4, name: 'Vitya'},
    {id: 5, name: 'Yarikk'},
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
