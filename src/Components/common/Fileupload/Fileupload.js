import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, Container, } from '@mui/material';
import _ from 'underscore';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import './Fileupload.css';

export default function Fileupload({ onSelectFile, preview }) {
    const thumbs = preview.length > 0 && preview.map((file, i) => {
        return (
            <div className="filePreviewBox" key={i.toString()}>
                <div className="filePreviewBox__img" >
                    <img src={file} />
                </div>
                <div className="filePreviewBox__cntnt">

                </div>
            </div>
        )
    });

    useEffect(() => {

    }, [preview]);
    return (
        <>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Box className="container">
                        <Box className={`fileUploader ${preview.length > 0 ? "active" : null}`}>
                            {thumbs}
                            <Box className="customFileUpload">
                                <input
                                    multiple
                                    accept=".jpg,.jpeg,.png"
                                    type='file' onChange={onSelectFile}
                                />
                                <label> <FileUploadIcon fontSize='small' sx={{ verticalAlign: "middle" }} /> Choose images</label>
                            </Box>
                        </Box>
                    </Box>

                </CardContent>
            </Card>
        </>
    )
}