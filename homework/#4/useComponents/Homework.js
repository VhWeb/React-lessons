import React, {useState} from 'react';
import useDocumentTitle from './useDocumentTitle'
import useIsOnline from './useIsOnline'
import useLocalStorage from './useLocalStorage'

const Homework = () => {
    const style = {
        textAlign: 'center'
    }
    const [titleName, setTitleName] = useState('')
    useDocumentTitle(titleName)

    const isOnline = useIsOnline()

    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <div>
                <h1>Change Document Title</h1>
                <div style={style}>
                    <input placeholder='Fill title' type="text" value={titleName} onChange={e => setTitleName(e.target.value)}/>
                    <br/>
                    Name: {titleName}
                </div>
            </div>
            <br/>
            <div>
                <h1>Online Status</h1>
                <div style={style}>
                    <span>{`You are ${isOnline ? 'online' : 'offline'}`}</span>
                </div>
            </div>
            <br/>
            <div>
                <h1>Local Storage</h1>
                <div style={style}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Homework;
