//Get all chats
export function getAllChats() {
  return fetch('/api/chats', {
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

//Add New Chat
export function addNewChat(chat) {
  return fetch('/api/chats', {
    medhod: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chat)
  }).then(response => response.json());
}
