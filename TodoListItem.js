import {
        MdCheckBoxOutlineBlank,
        MdRemoveCircleOutline,
        MdCheckBox
} from 'react-icons/md';
import '../css/TodoListItem.scss'
import classNames from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    // classNames는 true면 {이 값}이 들어간다. 
    return (
        <div className="TodoListItem">
            <div 
                className={classNames("checkbox", {checked})}
                onClick={()=> onToggle(id)}>  
                {checked? <MdCheckBox  /> :<MdCheckBoxOutlineBlank                
                />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove'
                 onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem