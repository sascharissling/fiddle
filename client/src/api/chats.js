//Get chat ID by userName1 and userName2
export async function getChatId(userName1, userName2) {
  return fetch(`/api/${userName1}/${userName2}`, {
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
export function initiateNewChat(userName1, userName2, messages) {
  return fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName1,
      userName2,
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
