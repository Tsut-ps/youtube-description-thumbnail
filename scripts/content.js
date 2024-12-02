function insertThumb() {
  console.log("Inserting thumb...");
  if (!document.location.href.match("youtube.com/watch")) return;

  const targetElement = document.querySelector("#structured-description");
  if (!targetElement) return;

  const existThumb = document.querySelector(".inserted-thumb");
  if (existThumb) existThumb.remove();

  const videoId = new URLSearchParams(document.location.search).get("v");
  if (!videoId) return;

  const videoTitle = document.title;
  const thumbURL = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const thumbImg = document.createElement("img");
  thumbImg.className = "inserted-thumb";
  thumbImg.src = thumbURL;
  thumbImg.alt = videoTitle;
  thumbImg.style.cssText = `
    width: 320px;
    height: 180px;
    margin: 16px 0;
    object-fit: cover;
    border-radius: 8px;
  `;
  targetElement.before(thumbImg);

  console.log("Inserted thumb", thumbURL);
}

document.addEventListener("yt-navigate-finish", () => {
  setTimeout(insertThumb, 2000);
});
