# Birthday Garden

A static birthday website for mobile and desktop.

## Share It As A Link

Upload this whole folder to any static hosting service, then send her the link.

Good simple options:
- Netlify Drop: drag the whole `Project Salvuu` folder into https://app.netlify.com/drop
- GitHub Pages
- Vercel static project

The entry file is `index.html`. Keep these with it:
- `styles.css`
- `script.js`
- `extras.js`
- `assets/`

## Test On Your Phone Locally

If your phone and computer are on the same Wi-Fi:

```powershell
python -m http.server 8080
```

Then open this on your phone, replacing `YOUR_PC_IP` with your computer's local IP:

```text
http://YOUR_PC_IP:8080
```
