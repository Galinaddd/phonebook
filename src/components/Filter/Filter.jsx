import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilterAction } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={e => dispatch(changeFilterAction(e.currentTarget.value))}
    />
  );
};
