const oFile = document.querySelector("input[type='file']");
oFile.onchange = function (){
    for(let i = 0;i < this.files.length;i++){
        let file = this.files[i];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e){
            console.log('e-----',e);
            let img = new Image();
            img.src = this.result;
            document.body.appendChild(img);
        }
    }
}