chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });
