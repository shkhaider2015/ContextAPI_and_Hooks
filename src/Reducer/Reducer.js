
const MyReducer = (state, action) =>
{
    switch(action)
    {
        case 'increment':
            return state + 1;
        case 'dicrement':
            return state - 1;
        default:
            return state;
    }
}

export default MyReducer