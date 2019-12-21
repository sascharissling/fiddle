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
