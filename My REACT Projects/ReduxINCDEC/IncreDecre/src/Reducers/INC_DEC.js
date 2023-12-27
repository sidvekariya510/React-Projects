let initial = { count: 0 }
const INC_DEC = (state = initial, action) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + 1 }
            break;
        case 'DEC':
            return { count: state.count - 1 }
            break;
        default:
            return { count: state.count }
            break;
    }
}

export default INC_DEC
