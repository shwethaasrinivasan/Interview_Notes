function addComment(parentId = null) {
    const input = parentId ? document.getElementById(`replyInput-${parentId}`) : document.getElementById('newComment');
    const text = input.value.trim();
    if (!text) return;
  
    const commentElement = document.createElement('div');
    commentElement.classList.add(parentId ? 'reply' : 'comment'); //to add the class
    commentElement.innerHTML = `
      <p>${text}</p>
      <button onclick="deleteComment(this)">Delete</button>
      ${!parentId ? `<button onclick="showReplyInput(${Date.now()})">Reply</button>
      <div id="replyContainer-${Date.now()}"></div>` : ''}
    `;
  
    if (parentId) {
      const replyContainer = document.getElementById(`replyContainer-${parentId}`);
      replyContainer.appendChild(commentElement);
      input.value = ''; // Clear reply input after adding
    } else {
      const commentsContainer = document.getElementById('commentsContainer');
      commentsContainer.appendChild(commentElement);
      document.getElementById('newComment').value = ''; // Clear comment input after adding
    }
  }
  
  function deleteComment(buttonElement) {
    buttonElement.parentElement.remove();
  }
  
  function showReplyInput(parentId) {
    const replyContainer = document.getElementById(`replyContainer-${parentId}`);
    replyContainer.innerHTML += `
      <input type="text" id="replyInput-${parentId}" placeholder="Add a reply..." />
      <button onclick="addComment(${parentId})">Post Reply</button>
    `;
  }
  
  // Initial call to setup or refresh comments, if needed
  