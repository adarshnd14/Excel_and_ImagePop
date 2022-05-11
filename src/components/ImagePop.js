import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'

const style = {
    width: 550,
    bgcolor: 'white',
    border: '1px solid white',
    borderRadius: 2,
    p: 2,
    px: 4,
    pb: 3,
};

function ImagePop() {
    const [sopen, setsopen] = useState(false);
    const [img, setimg] = useState({ name: '' });
    const [imgName, setimgName] = useState({ name: '' });

    //get imag file path -> use FileReader, go to (e.target.files[0])
    const handleFile = (e) => {
        setsopen(true)
        var input = e.target;
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            var output = document.getElementById('output');
            output.src = dataURL;
            console.log(output.src);
            setimgName({
                name: dataURL
            })
            console.log(imgName.name);
            // picVal(dataURL)
        };
        // if (imgName.includes('jpeg')) {
        //   setsopen(true)
        reader.readAsDataURL(input.files[0]);
        // } else {
        //   setsopen(false)
        //   alert('select only image file')
        // }
    };

    // const picVal = (file) => {    
    //   if (file.includes('jpg')) {
    //     setsopen(true)
    //   } else {
    //     alert('select only image file')
    //   }
    // }
    // console.log(img)

    return (
        <div>
            <div className='col-3 d-inline mt-3'>
                <input type='file' accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleFile(e)} />
            </div>
            <Modal
                open={sopen}
                onClose={() => { setsopen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className='col-7'>
                    <img id='output' src={img.name} width='500px' alt='img' />
                </Box>
            </Modal></div>
    )
}

export default ImagePop