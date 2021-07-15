interface ActionInterface{
    type: string
}

const acReducer = (state = false, action: ActionInterface) => {
    switch (action.type) {
        case 'CHANGE':
            return !state;
        default:
            return state;
    }
}

export default acReducer;