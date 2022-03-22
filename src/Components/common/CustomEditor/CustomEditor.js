import React from "react";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Paper } from "@mui/material";

export default function CustomEditor({ editorState, updateTextDescription }) {
    return (
        <Paper>
            <Editor
                editorState={editorState}
                toolbarClassName="textEditorBoxToolbar"
                wrapperClassName="wrapperClassName"
                editorClassName="textEditorBox"
                onEditorStateChange={updateTextDescription}
                toolbar={
                    {
                        options: ['inline', 'blockType', 'emoji', 'image', 'colorPicker', 'list', 'textAlign', 'link',],
                        inline: {
                            inDropdown: false,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['bold', 'italic', 'underline'],

                        },
                        blockType: {
                            inDropdown: true,
                            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                        },
                        list: {
                            inDropdown: true,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['unordered', 'ordered', 'indent', 'outdent'],

                        },
                        textAlign: {
                            inDropdown: true,
                            className: undefined,
                            component: undefined,
                            dropdownClassName: undefined,
                            options: ['left', 'center', 'right', 'justify'],

                        },
                        colorPicker: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                                'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                                'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                                'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                                'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                        },
                        link: {
                            inDropdown: true,
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            dropdownClassName: undefined,
                            showOpenOptionOnHover: true,
                            defaultTargetOption: '_self',
                            options: ['link', 'unlink'],
                            linkCallback: undefined
                        },
                        emoji: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            emojis: [
                                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                '✅', '❎', '💯',
                            ],
                        },
                        embedded: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            embedCallback: undefined,
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },
                        image: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            urlEnabled: true,
                            uploadEnabled: true,
                            alignmentEnabled: true,
                            uploadCallback: undefined,
                            previewImage: false,
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            alt: { present: false, mandatory: false },
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },

                    }
                }
            />
            <textarea
                disabled
                style={{ width: "100%", display: "none" }}
                value={draftToHtml(
                    convertToRaw(
                        editorState && editorState.getCurrentContent()
                    )
                )}
            />
        </Paper>
    )
}