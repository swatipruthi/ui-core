import {ADD_EXPENSE,REMOVE_EXPENSE, addExpense} from '../actions';
import expense , {initialState} from '../reducers';
import expenses from '../reducers';

describe('reducers',()=>{
    it('should add expenses',()=>{
        const stateStep1 = expenses(initialState,addExpense({
            id:1,
            amount:20
        }));
        expect(stateStep1.expenses.length).toBe(1);
        expect(stateStep1.balance).toBe(20);
    })
});