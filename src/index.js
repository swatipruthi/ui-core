import {createStore} from 'redux';
import {addExpense,removeExpense} from './actions';
import expenses from './reducers';

const store = createStore(expenses);

store.dispatch(addExpense({
    id:1,
    amount:45
}));

store.dispatch(addExpense({
    id:2,
    amount:40
}));

store.dispatch(addExpense({
    id:3,
    amount:50
}));

store.dispatch(removeExpense({
    id:2
}));