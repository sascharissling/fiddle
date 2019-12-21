//Get all chats
export function getAllChats(chatId) {
  return fetch(`/api/chats`, {
    medhod: 'GET'
  })
    .then(response => {
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

//Get Chat by ID
export function getChat(chatId) {
  return fetch(`/api/chats/${chatId}`, {
    medhod: 'GET'
  })
    .then(response => {
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}
