import { useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
    const { name } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('name');
    console.log(keyword);

    return (
        <div>
            학생 이름은 <span style={{ color: 'green' }}>{name}</span> 입니다.
            {keyword !== null && (
                <div>
                    실제 이름은 <span style={{ color: 'red' }}>{keyword}</span>입니다
                </div>
            )}
        </div>
    );
}
