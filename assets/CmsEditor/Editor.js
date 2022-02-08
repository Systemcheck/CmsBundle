import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import Timeline from './tools/timeline/tool';
import ImageTool from '@editorjs/image'; 


const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
  }
}



const Editor = (props) => {
    const EDITTOR_HOLDER_ID = `editor_${props.section}_${props.column}`;
    
    const ejInstance = useRef();
    const [editorData, setEditorData] = React.useState(null);
    const [editor, setEditor] = React.useState();

    const [ blocks, setBlocks] = React.useState([])
    const Paragraph = require('editorjs-paragraph-with-alignment');
    const AlignmentTuneTool = require('editorjs-text-alignment-blocktune'); 

    useEffect(() => {
        if(props.blocks) {
            setBlocks(props.blocks);
    
            let editordata = {
                "time": new Date().getTime(),
                "blocks": props.blocks
            }
            
            setEditorData(editordata)
            //initEditor(editordata)
        }
        
        
    }, [props.blocks])
    
    // This will run only once
    useEffect(() => {
        if(editorData) {
            if (!ejInstance.current) {
            initEditor();
            } 
            
            return () => {
            ejInstance.current.destroy();
            ejInstance.current = null;
            }
        }
        
    }, [editorData]);

    const initEditor = () => {
        let editor = new EditorJS({
            holder: EDITTOR_HOLDER_ID,
            logLevel: "ERROR",
            data: editorData,
            onReady: () => {
                ejInstance.current = editor;
            },
            onChange: (api, event) => {

                /*api.saver.save().then((outputData) => {
                    props.onSave(props, outputData, EDITTOR_HOLDER_ID)
                })*/
            },
            /*onChange: async () => {
                let content = await this.editorjs.saver.save();
                // Put your logic here to save this data to your DB
                setEditorData(content);
            },*/
            autofocus: true,
            tools: { 
                header: Header, 
                timeline: Timeline,
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                header: {
                    class: Header,
                    tunes: ['align'],
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                  },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                        }
                    }
                },
                align: {
                    class:AlignmentTuneTool,
                    config:{
                      default: "left",
                      blocks: {
                        header: 'center',
                        list: 'left',
                        paragraph: 'center'
                      }
                    },
                },
            }, 
        });
        setEditor(editor);
        
    };

    return (
        <React.Fragment>
        <div id={EDITTOR_HOLDER_ID}> </div>
        </React.Fragment>
    );
}

export default Editor;