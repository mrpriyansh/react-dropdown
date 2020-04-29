import React, { useRef, useState } from 'react';
import styles from './Dropzone.module.css';

function Dropzone() {
    const [highlight, setHighlight] = useState(false);
    const fileInputRef = useRef();
    const openFileDialog=()=>{
        fileInputRef.current.click();
    }

    const fileListToArray=(list)=>{
        const array=[];
        for( let i =0;i<list.length;i++)
            array.push(list.item(i));
        return array;
    }
    const onFilesAdded= event =>{
        const files = event.target.files;
        console.log(files);
        const array = fileListToArray(files);
        console.log('aa',array);
        return array;
    }
    const onDragOver=(event)=>{
        event.preventDefault();
        setHighlight(true);
    }
    const onDragLeave=(event)=>{
        event.preventDefault();
        setHighlight(false);
    }
    const onDrop=(event)=>{
        event.preventDefault();
        const files = event.dataTransfer.files;
        console.log(files);
        const array = fileListToArray(files);
        console.log('aa',array);
        setHighlight(false);
    }
    return(
        <div onClick={openFileDialog} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} className={highlight? `${styles.dropzone} ${styles.highlight}` : `${styles.dropzone}`}>
            <img alt = "upload" className={styles.icon} src="https://lh3.googleusercontent.com/proxy/ASa6qJYljWSVYiJKdbraZ3WCdGJgAo9O_MzBS008vMaXKMAt3c8MKwLt8Z6tVewfTjCYbqfVab5UawP8cB4g3sl3ncslr-6W1tGNP6Zz_5BEJRDXgEOgd4k" />
            <input ref={fileInputRef} className={styles.file_input} type="file" multiple  onChange={onFilesAdded} />
            <span>Upload Files</span>
        </div>
    )
}
export default Dropzone;