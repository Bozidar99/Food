// pokusaj kad se ubaci slika ali nije bilo potrebe za tim u ovom trenutku 
export const FileParser = (file) => {
    return new Promise((resolve, reject) => {
        let fileReader =    new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => resolve(fileReader.result);
    })
   

}