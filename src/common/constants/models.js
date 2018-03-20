import Immutable from 'immutable';

// initstate model
export const UiState = Immutable.fromJS({
  spinnerVisible: false,
  isEdit: false,
});

export const RecipeState = Immutable.fromJS({
  recipes: [],  
  recipe: {
    id: '',
    name: '', 
    description: '', 
    imagePath: '',     
  } 
});

export const UserState = Immutable.fromJS({
  username: '',
  email: '',
  password: '',
  isAuthorized: false,
});
