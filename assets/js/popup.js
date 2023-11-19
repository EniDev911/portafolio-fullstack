const popup = (src) => {
    const p = document.createElement('dialog');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    p.classList.add('popup');
    img.src = src;
    btn.textContent = 'x'
    btn.classList.add('close')
    p.append(img);
    p.append(btn);
    p.open = true;
    btn.onclick = () => {
        p.close();
    }
    document.body.appendChild(p);
}

{/* <dialog id="mc_extends">
<p align="center">
  <img src="assets/mc-x.png" alt="meta comando x">
</p>
<button onclick="{mc_extends.close()}">&times;</button>
</dialog>   */}