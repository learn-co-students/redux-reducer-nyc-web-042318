export function manageFriends(state = {
    friends: [],
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return Object.assign({}, state, {
          friends: [
            ...state.friends,
            action.friend
          ]
        });
  
      case "REMOVE_FRIEND":
      // Assuming the incoming action contains the ID of the friend we want to remove, find the matching friend. 
      // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        
        return Object.assign({}, state, {
          friends: [
            ...state.friends.slice(0, removalIndex),
            ...state.friends.slice(removalIndex + 1)
          ]
        });
  
      default:
        return state;
  
    }
  };