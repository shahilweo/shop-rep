import React, { useState, useEffect } from 'react'
import { Box, Card, CardContent, Container, Paper, } from '@mui/material';
import _ from 'underscore';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './Fileupload.css';

export default function SingleFileupload({ onFileChange, preview }) {
    return (
        <>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Box className="container">
                        <Box className="fileUploader">
                            {preview && preview !== "" &&
                                <Paper sx={{ mb: 2 }} className="filePreviewBox singlefilePreviewBox">
                                    <div className="filePreviewBox__img" >
                                        <img src={preview} />
                                    </div>
                                </Paper>
                            }
                            <Box className="customFileUpload">
                                <input
                                    accept=".jpg,.jpeg,.png,.webp,.svg"
                                    type='file'
                                    onChange={onFileChange}
                                />
                                <label>
                                    <FileUploadIcon fontSize='small' sx={{ verticalAlign: "middle" }} /> {preview && preview !== "" ? 'Change' : 'Choose'} image
                                </label>
                            </Box>
                        </Box>
                    </Box>

                </CardContent>
            </Card>
        </>
    )
}