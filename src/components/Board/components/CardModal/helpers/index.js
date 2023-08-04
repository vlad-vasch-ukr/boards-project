import { ContentState, convertFromHTML, EditorState } from 'draft-js';

export const prepareHtmlStringForEditor = (HtmlString) => {
    const blocksFromHTML = convertFromHTML(HtmlString);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    );

    return EditorState.createWithContent(state);
}