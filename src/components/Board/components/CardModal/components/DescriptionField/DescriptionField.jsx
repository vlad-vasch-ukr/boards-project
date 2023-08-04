import { useState } from 'react';
import PropTypes from 'prop-types';
import { convertToRaw, EditorState, convertFromHTML, ContentState } from 'draft-js';
import parse from 'html-react-parser';
import draftToHtmlPuri from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { Icon } from '../../../../../../UI/Icons/index.js';
import Button from '../../../../../../UI/Button/Button.jsx';
import { prepareHtmlStringForEditor } from '../../helpers/index.js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './DescriptionField.scss';

function DescriptionField({ onSave, description }) {
    const [isEditorOpened, setEditorOpened] = useState(false);
    const [editorState, setEditorState] = useState(prepareHtmlStringForEditor(description));
    const onEditorStateChange = (editorStore) => setEditorState(editorStore);
    //const currHtml = draftToHtmlPuri(convertToRaw(editorState.getCurrentContent()));
    const openEditor = () => setEditorOpened(true);
    const closeEditor = () => {
        //setEditorState(EditorState.createWithContent(state));
        setEditorOpened(false);
    }
    const saveChanges = () => {
        const html = draftToHtmlPuri(convertToRaw(editorState.getCurrentContent()));
        onSave(html);
        closeEditor();
    }

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
                    <>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="editor-toolbar"
                            wrapperClassName="editor-wrapper"
                            editorClassName="editor"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <div className="description-field__actions">
                            <Button onClick={saveChanges}>
                                Save
                            </Button>
                            <Button
                                variant="transparent"
                                className="ml-2"
                                onClick={closeEditor}
                            >
                                Cancel
                            </Button>
                        </div>
                    </>
                ) }
                { !isEditorOpened && description && (
                    <div className="cursor-pointer" onClick={openEditor}>{ parse(description) }</div>
                ) }
            </div>
        </div>
    );
}

DescriptionField.propTypes= {
    description: PropTypes.string,
    onSave: PropTypes.func
}

DescriptionField.defaultProps = {
    description: '',
    onSave: () => {}
}

export default DescriptionField;