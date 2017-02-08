import update from 'immutability-helper';
import * as actions from '../actions/index';;
import store from '../store';



const initialState = {
	categories: [],
	expenses: [],
	goals: [],
	currentCategory: 'All',
	categoryTotals: [],
	calendar: calendar
}
