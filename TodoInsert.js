import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md"
import "../css/TodoInsert.scss"

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    /*
        메모라이저 : 특정 값을 기억해 두고 반복될때 생성하지않고 빠르게 실행(최적화)
        useMemo : 데이터(자료)를 메모라이저
        useCallback : 함수를 메모라이저 
    */

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]); // 처음 실행시 한번만 등록 

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert, value])  
    
    return (
        <form 
            className="TodoInsert"
            onSubmit={onSubmit}>

            <input 
            placeholder="할 일 입력"
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>

    )
}

export default TodoInsert