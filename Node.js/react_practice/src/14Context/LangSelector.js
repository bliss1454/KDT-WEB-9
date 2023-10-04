import { useContext } from "react";
import SettingContext from "./store/setting-context";

export default function LanguageSelector() {
    const {language, setLanguage} = useContext(SettingContext);

    return (
        <div>
            <h2>현재 선택된 언어: {language} </h2>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value='Ko'>한국어</option>
                <option value='En'>영어</option>              
            </select>
        </div>
    );
}