import React from 'react';
import styles from '../Hero/DownloadCVButton.module.css';

const DownloadCVButton = () => {
    const HandleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
    <button onClick={HandleDownload} className={styles.btnDownload}>
        Descargar CV
    </button>
    );
};

export default DownloadCVButton;