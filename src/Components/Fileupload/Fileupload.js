import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, } from '@mui/material';

import './Fileupload.css';

export default function Fileupload() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()


    const onSelectFile = (e) => {
        let files = Array.from(e.target.files);
        let reader = new FileReader();
        console.log("files", files)
        reader.onloadend = () => {
            console.log("reader", reader.result)

        }
        // if (!_.isUndefined(file)) {
        //     reader.readAsDataURL(file);
        // }

    }


    return (
        <>
            <Box className="smallContainer">
                <Card sx={{ mb: 2 }}>
                    <CardContent>
                        <Box className="customFileUpload">
                            <input
                                multiple="multiple"
                                accept=".jpg,.jpeg,.png"
                                type='file' onChange={onSelectFile}
                            />

                        </Box> {selectedFile && <img src={preview} />}
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}