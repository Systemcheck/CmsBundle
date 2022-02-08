import { Typography, Container, Box } from '@material-ui/core';
import { default as React } from 'react';
import Editor from './Editor';
import axios from 'axios'

function App() {
    const [gridPreview, setGridPreview] = React.useState(false)
    const [sections, setSections] = React.useState(null)
    const [newsections, setNewSections] = React.useState(null)
    const [pageId, setPageId] = React.useState(null)
    
    const toggleGrid = () => setGridPreview(gridPreview ? false : true)
    
    React.useEffect(() => {
        setPageId(window.REP_LOG_APP_PROPS.id)
        setSections(JSON.parse(window.REP_LOG_APP_PROPS.app))
    }, [window.REP_LOG_APP_PROPS])

    const addSection = (cols) => {
        if(sections) {
            let newsections = [...sections]
        } else {
            let newsections = new Array();
        }
        
        let columns = new Array();
        
        cols.map((col,idx) => {
            columns.push({
                'blocks' : new Array(),
                'width' : col
            })
        })
        
        if(newsections.length === 0) {
            newsections = new Array()
            newsections = [{
                columns : columns
            }]
        } else {
            newsections.unshift({columns : columns})
        }
        
        setSections(newsections)
        toggleGrid()
    }
    
    function saveBlocks (props,data,id) {
        if(sections) {
            let savedsections = [...sections]
        } else {
            let savedsections = new Array();
        }
        
        
        let columns = savedsections[props.section].columns
        
        
            let column = props.column
            columns[column].blocks = data.blocks
            savedsections[props.section] = {
                columns
            }
            setNewSections(savedsections);
            axios.post('https://localhost:8000/cms-editor-api/page/saveSections/1',savedsections)
            .then((res) => {
                    console.log(res);
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        
    }
    console.log(newsections);
    const setSectionOption = (e) => {
        console.log(e)
    }
    const saveNow = () => {
        axios.post('https://localhost:8000/cms-editor-api/page/saveSections/1',newsections)
            .then((res) => {
                    console.log(res);
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
    }
    return (
        <React.Fragment>
            <Container
                style={{ minHeight: "100vh" }}
                maxWidth="xl"
                className="p-0">
                <Box>
                    <button type="button" className="btn btn-primary" onClick={() => saveNow()}>Speichern</button>
                </Box>
                <Box marginTop={5} className='text-center'>
                    <span className="sw-icon icon--default-basic-plus-circle sw-icon--fill" style={gridPreview ? {width: 24,height: 24} : {transform: 'rotate(45deg)',width: 24,height: 24}} onClick={() => toggleGrid() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="var(--primary)" fillRule="evenodd" d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 8.11624501e-16,18.627417 0,12 C6.29380286e-15,5.372583 5.372583,3.29258647e-16 12,-8.8817842e-16 C18.627417,-3.29258647e-16 24,5.372583 24,12 Z"></path>
                    </svg>
                    </span>
                    <p>Füge eine neue "Section" hinzu</p>
                </Box>
                {gridPreview ? <Box marginTop={5} className='mx-auto text-center'>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="gridPreview me-1" onClick={() => addSection([12])}>
                                <div className="row" style={{height: '-webkit-fill-available'}}>
                                    <div className="col-12">
                                        <div className="previewInner"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="gridPreview me-1" onClick={() => addSection([6,6])}>
                                <div className="row" style={{height: '-webkit-fill-available'}}>
                                    <div className="col-6">
                                        <div className="previewInner"></div>
                                    </div>
                                    <div className="col-6">
                                        <div className="previewInner"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="gridPreview me-1" onClick={() => addSection([4,4,4])}>
                                <div className="row" style={{height: '-webkit-fill-available'}}>
                                    <div className="col-4">
                                        <div className="previewInner"></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="previewInner"></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="previewInner"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="gridPreview" onClick={() => addSection([4,8])}>
                                <div className="row" style={{height: '-webkit-fill-available'}}>
                                    <div className="col-4">
                                        <div className="previewInner"></div>
                                    </div>
                    
                                    <div className="col-8">
                                        <div className="previewInner"></div>
                                    </div>
                                </div>
                            </div>                 
                        </div>
                    </div></Box> : null}

                {sections && sections.length > 0 ? sections.map((section, index) => {
                    return(
                        <section key={index} className="cms-editor-section">
                            <div className="row">
                                <select className="form-control" multiple onChange={(e) => setSectionOption(e)}>
                                    <option value="shape-divider-top">Shape Divider Top</option>
                                    <option value="shape-divider-bottom">Shape Divider Bottom</option>
                                </select>
                            </div>
                            <div className="row p-4">
                                {section.columns.map((column, colidx) => {
                                    return (
                                        <div className={'col-'+column.width} key={colidx}>
                                            <div className="cms-editor-section-column me-2">
                                                <div className="text-center">
                                                    <span className="sw-icon icon--default-basic-plus-circle sw-icon--fill" style={{width: 24,height: 24}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="#758CA3" fillRule="evenodd" d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 8.11624501e-16,18.627417 0,12 C6.29380286e-15,5.372583 5.372583,3.29258647e-16 12,-8.8817842e-16 C18.627417,-3.29258647e-16 24,5.372583 24,12 Z"></path>
                                                        </svg>
                                                    </span> 
                                                    <p>Füge Blöcke per Drag &amp; Drop hinzu</p>
                                                    <Editor blocks={column.blocks} section={index} column={colidx} onSave={saveBlocks} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                            
                        </section>
                    )
                }) : null}
                <Box p={0} marginTop={5}>
                    <Box>
                        <Typography variant="h6" component="span">
                            CMS Editor
                        </Typography>
                    </Box>
                    <Box
                        mt={2}
                        p={4}
                        style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #cccccc'
                    }}>
                        <Editor />
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;