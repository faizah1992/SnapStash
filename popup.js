document.addEventListener('DOMContentLoaded', function () {
  const categorySelect = document.getElementById('category');
  const saveButton = document.getElementById('saveButton');
  const itemList = document.getElementById('itemList');

  saveButton.addEventListener('click', function () {
    const selectedCategory = categorySelect.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${url}" target="_blank">${selectedCategory}</a>`;
      itemList.appendChild(listItem);
    });
  });
});
