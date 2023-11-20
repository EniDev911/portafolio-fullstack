const popup = (src) => {
    let params  = 'width='+screen.width;
       params += ', height='+screen.height;
       params += ', top=0, left=0'
       params += ', fullscreen=yes';
       params += ', directories=no';
       params += ', location=no';
       params += ', menubar=no';
       params += ', resizable=no';
       params += ', scrollbars=no';
       params += ', status=no';
       params += ', toolbar=no';
       window.open(src, '_blank', params)
}

  // popup function alternative 

    // const p = document.createElement('dialog');
    // const img = document.createElement('img');
    // const btn = document.createElement('button');
    // p.classList.add('popup');
    // img.src = src;
    // btn.textContent = 'x'
    // btn.classList.add('close')
    // p.append(img);
    // p.append(btn);
    // p.open = true;
    // btn.onclick = () => {
    //     p.close();
    // }
    // document.body.appendChild(p);