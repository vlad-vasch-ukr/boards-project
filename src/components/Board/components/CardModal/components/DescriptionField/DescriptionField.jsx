import { useState } from 'react';
import { convertToRaw, EditorState, convertFromHTML, convertFromRaw, ContentState } from 'draft-js';
import draftToHtmlPuri from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import { Icon } from '../../../../../../UI/Icons/index.js';
import Button from '../../../../../../UI/Button/Button.jsx';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './DescriptionField.scss';
import PropTypes from "prop-types";

function DescriptionField({ isEdit, description }) {

    const [isEditorOpened, setEditorOpened] = useState(false);
    const sampleMarkup =
        '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
        '<a href="http://www.facebook.com">Example link</a>';
    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    const [editorState, setEditorState] = useState(EditorState.createWithContent(state));
    const onEditorStateChange = function (editorState) {
        setEditorState(editorState);

        const html = draftToHtmlPuri(convertToRaw(editorState.getCurrentContent()));

        /*let text = blocks.reduce((acc, item) => {
          acc = acc + item.text;
          return acc;
        }, "");*/
        let text = editorState.getCurrentContent().getPlainText("\u0001");
        console.log(text)
        // setText(text);
    };
    const openEditor = () => setEditorOpened(true);

    return (
        <div className="description-field">
            <div className="description-field__header">
                <span className="block mr-2">
                    <Icon variant="text" />
                </span>
                <span className="font-medium block mr-auto">Description</span>
                { !isEditorOpened && (
                    <Button
                        variant="gray"
                        onClick={openEditor}
                    >
                        Change
                    </Button>
                ) }
            </div>
            <div className="description-field__field">
                { !isEditorOpened && !description && (
                    <div className="description-field__plug" onClick={openEditor}>
                    <span>Add a more detailed description...</span>
                    </div>
                ) }
                { isEditorOpened && (
                    <Editor
                        editorState={editorState}
                        toolbarClassName="editor-toolbar"
                        wrapperClassName="editor-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={onEditorStateChange}
                    />) }
                { !isEditorOpened && description && <div>{description}</div> }
            </div>
            <div className="description-field__actions">
                <Button>
                    Save
                </Button>
            </div>
        </div>
    );
}

DescriptionField.propTypes= {
    description: PropTypes.string
}

DescriptionField.defaultProps = {
    description: ''
}

export default DescriptionField;