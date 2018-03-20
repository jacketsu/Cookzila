import React from 'react';
import { connect } from 'react-redux';
import RecipeBox from '../../components/RecipeBox';
import { browserHistory } from 'react-router';

import {
  deleteRecipe,
  setRecipe,
  setUi
} from '../../actions';

export default connect(
  (state) => ({
    isAuthorized: state.getIn(['user', 'isAuthorized']),
    recipes: state.getIn(['recipe', 'recipes']),
  }),
  (dispatch) => ({
    onDeleteRecipe: (recipeId) => () => (
      dispatch(deleteRecipe(dispatch, recipeId))
    ),
    onUpadateRecipe: (recipes) => (recipeId) => () => {
      const recipeIndex = recipes.findIndex((_recipe) => (_recipe.get('_id') === recipeId));
      const recipe = recipeIndex !== -1 ? recipes.get(recipeIndex) : undefined;
      dispatch(setRecipe({ keyPath: ['recipe'], value: recipe }));
      dispatch(setRecipe({ keyPath: ['recipe', 'id'], value: recipeId }));
      dispatch(setUi({ key: 'isEdit', value: true }));
      browserHistory.push('/share?recipeId=' + recipeId); 
    },
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { recipes } = stateProps; 
    const { onUpadateRecipe } = dispatchProps; 
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onUpadateRecipe: onUpadateRecipe(recipes),
    });
  }
)(RecipeBox);

