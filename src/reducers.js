import {ADD_EXPENSE,REMOVE_EXPENSE, addExpense, removeExpense} from './actions';

export default expenses;

export const initialState = {
    expenses:[],
    balance:0
};

expenses = (state=initialState,action={})=>{
    switch(action.type){
        case ADD_EXPENSE:
        return addExpense(state,action.expense);
        case REMOVE_EXPENSE:
        return removeExpense(state,action.expense);
        default:
        return state;
    }
 }

 addExpense = (state,expense)=>{
   return{
     expenses:[...state.expenses,expense],
     balance:state.balance+expense.amount
   }
 };

 removeExpense =(state,expense)=>{
   return{
     expenses:[...state.expenses,expense],
     balance:state.balance-expense.amount
   }
 };

