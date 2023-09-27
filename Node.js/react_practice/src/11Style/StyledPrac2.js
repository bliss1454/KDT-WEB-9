import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const _Input = styled.input`
    width: 200px;
    height: 20px;
`;

const _Btn = styled.button`
    background-color: skyblue;
    color: black;
    border: 0;
    margin-left: 5px;
    width: 40px;
    height: 20px;
`;

export default function StyledPrac2() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddItem = () => {
        if (input.trim() !== '') {
            setItems([...items, input]);
            setInput('');
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // 스크롤이 페이지의 끝에 도달하면 새 항목을 로드합니다.
            loadMoreItems();
        }
    };

    const loadMoreItems = () => {
        // 로딩 중이 아닌 경우에만 새 항목을 로드합니다.
        if (!isLoading) {
            setIsLoading(true);

            // 예를 들어, 여기에서 새 항목을 가져오는 비동기 작업을 수행합니다.
            // 이 예제에서는 간단히 1초 후에 새 항목을 추가합니다.
            setTimeout(() => {
                const newItem = `새 항목 ${items.length + 1}`;
                setItems([...items, newItem]);
                setIsLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        // 스크롤 이벤트 리스너를 추가합니다.
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <_Input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
            <_Btn onClick={handleAddItem}>Add</_Btn>
            <span>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </span>
            {isLoading && <p>Loading...</p>}
        </div>
    )
}
