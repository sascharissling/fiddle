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
export async function getChatInformation(_id) {
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
export async function getChatMessages(_id) {
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

//Get chat ID by user1 and user2
export async function getChatId(user1, user2) {
  return fetch(`/api/${user1}/${user2}`, {
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

//Create new chat
export function initiateNewChat(user1, user2, messages) {
  return fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user1,
      user2,
      messages
    })
  });
}

//Send chat message
export function sendChatMessage(body, author, type, _id) {
  return fetch(`/api/${_id}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body,
      author,
      type
    })
  });
}

//Upload Audio To Cloudinary
export function uploadAudio(audioFile, author, chatId, recordingDate) {
  const fd = new FormData();
  fd.append('upload_preset', 'q77lopqd');
  fd.append('file', audioFile);
  fd.append('public_id', `${chatId}-${recordingDate}-${author}`);
  return fetch('https://api.cloudinary.com/v1_1/fiddle/upload', {
    method: 'POST',
    body: fd
  });
}
