//Get chats which logged in user was engaged in
export function getUserChats(userName) {
  return fetch(`/api/userChats/${userName}`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

//Get chat information by _id
export function getChatInformation(_id) {
  return fetch(`/api/${_id}`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

//Get chat messages by Mongo-_id
export function getChatMessages(_id) {
  return fetch(`/api/${_id}/messages`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}
