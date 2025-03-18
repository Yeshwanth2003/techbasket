export default function base64ToIMGurl(base64Data, callback) {
  fetch(base64Data)
    .then((res) => res.blob())
    .then((data) => {
      const blobUrl = URL.createObjectURL(data);
      callback(null, blobUrl);
    })
    .catch((err) => {
      callback(err, null);
    });
}
