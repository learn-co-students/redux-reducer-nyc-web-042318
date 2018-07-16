export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      console.log(action)
      console.log(state)
      return {friends: state.friends.filter(friend => {return friend.id !== action.id})}
    default:
      return state;
  }
}
