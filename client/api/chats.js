//Get all chats
export function getAllChats() {
  return fetch('/api/chats', {
    method: 'GET'
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
    method: 'GET'
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chat)
  }).then(response => response.json());
}

//Add New Message
export function addNewChat(id) {
  return fetch(`/api/chats/${id}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chat)
  }).then(response => response.json());
}
