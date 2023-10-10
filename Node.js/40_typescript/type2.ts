//interface
interface Student {
    name: string;
    grade: number;
    isPassed: boolean;
};
let persons : Student[] = [
    {
        name: 'bliss',
        grade: 1,
        isPassed: true,
    }
]; //배열로 쓸 시에는 []사용

/* --------------------------------------- */
//type
type Gender= 'Female' | 'male';
const gender : Gender = 'Female'

/* --------------------------------------- */
//실습2
interface heroGame {
    title: string;
    price: number;
    desc?: string; //?로 선택조건을 나타낼 수 있음.
    category: string;
    platform: string
};
let heroGame_A : heroGame = {
    title: '가디언즈오브갤럭시',
    price: 40000,
    desc: '아임그루트!',
    category: '액션',
    platform: '모바일'
};
let heroGame_B : heroGame = {
    title: '스파이더맨',
    price: 90000,
    category: '롤플레잉',
    platform: '모바일'
};