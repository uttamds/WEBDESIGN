
### 🔹 **Semantic Elements**

1. **`<header>`**
   - Used for introductory content, title, or logo.
   - Appears at the top of the page or section.

2. **`<section>`**
   - Represents a thematic grouping of content.
   - Often has a heading.

3. **`<article>`**
   - Represents self-contained content (e.g., a blog post, news article).
   - Can be reused or shared independently.

4. **`<footer>`**
   - Appears at the bottom.
   - Typically contains copyright info, links, or contact details.

---

### 🔹 **Form with Advanced Input Types**

Used to collect user data in a structured way.

| Input Type | Purpose                      | Example Element                         |
|------------|------------------------------|------------------------------------------|
| `email`    | For collecting email address | `<input type="email">`                   |
| `date`     | For picking a date           | `<input type="date">`                    |
| `color`    | For choosing a color         | `<input type="color">`                   |
| `range`    | For selecting a value range  | `<input type="range">` (slider control)  |

- Use `<form>` to group all input fields.
- Use `<label>` for better accessibility and UX.

---

### 🔹 **Audio and Video Tags**

These tags help you add multimedia directly to your webpage.

#### ✅ **`<audio>`**
- Plays sound files like MP3.
- Use `controls` attribute to display play/pause buttons.

```html
<audio controls>
    <source src="file.mp3" type="audio/mpeg">
</audio>
```

#### ✅ **`<video>`**
- Embeds video files (e.g., MP4).
- `controls` adds play/pause UI.
- You can set `width` and `height`.

```html
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

---

### 🟡 **Tips**

- Use **semantic tags** for better readability and SEO.
- Always include fallback text inside audio/video for unsupported browsers.
- Inline CSS (`style="..."`) is okay for learning, but better to use external CSS in real projects.
