import { useSelector, useDispatch } from 'react-redux';
import {changeSaga} from '../../redux/actions'

export default function ButtonTheme() {
    const dispatch = useDispatch();
    const ac = useSelector(state => state);
    
    return (
        <div className="dds__mb-2">
            <button onClick={() => dispatch(changeSaga())} type="button" className="dds__btn dds__btn-primary dds__text-truncate">
                AC: {ac ? "true" : "false"}
            </button>
        </div>
    );
}